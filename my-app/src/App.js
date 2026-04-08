import { useState, useEffect } from 'react';
import './App.css';
import { db, storage } from './firebase';
import { collection, addDoc, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ArticleCard from './components/ArticleCard';
import NewArticleModal from './components/NewArticleModal';
import CourseSlider from './components/CourseSlider';
import { calcReadTime } from './utils/readTime';

const CATEGORIES = ['ALL', 'ART', 'STREET ART', 'SCULPTURES'];

function App() {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showModal, setShowModal] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setArticles(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsubscribe;
  }, []);

  async function handlePublish(form, imageFile) {
    setPublishing(true);
    try {
      let imageUrl = null;
      if (imageFile) {
        const imageRef = ref(storage, `articles/${Date.now()}_${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }
      const now = new Date();
      await addDoc(collection(db, 'articles'), {
        title: form.title,
        description: form.description,
        category: form.category,
        author: form.author,
        duration: calcReadTime(form.description),
        imageUrl,
        date: now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
        createdAt: now.toISOString(),
      });
      setShowModal(false);
    } catch (err) {
      console.error(err);
    } finally {
      setPublishing(false);
    }
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db, 'articles', id));
  }

  const filtered = activeCategory === 'ALL'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="app">
      <nav className="nav">
        <span className="nav-brand">NYC MAGAZINE</span>
        <div className="nav-links">
          <a href="#">Magazine</a>
          <a href="#">Authors</a>
          <a href="#">Podcast</a>
          <button className="nav-post-btn" onClick={() => setShowModal(true)}>+ New Article</button>
        </div>
      </nav>

      <CourseSlider articles={articles} />

      <div className="categories-bar">
        <span className="categories-label">CATEGORIES</span>
        <div className="category-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map(article => (
          <ArticleCard key={article.id} article={article} onDelete={handleDelete} />
        ))}
      </div>

      {showModal && (
        <NewArticleModal
          onClose={() => !publishing && setShowModal(false)}
          onSubmit={handlePublish}
          publishing={publishing}
        />
      )}
    </div>
  );
}

export default App;
