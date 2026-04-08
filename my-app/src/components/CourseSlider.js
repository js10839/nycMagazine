import { useState, useRef } from 'react';
import { calcTimeAgo } from '../utils/readTime';

function CourseSlider({ articles }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  if (!articles.length) return null;

  const scrollTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    setCurrent(index);
  };

  const prev = () => scrollTo(Math.max(0, current - 1));
  const next = () => scrollTo(Math.min(articles.length - 1, current + 1));

  return (
    <section className="course-section">
      <div className="course-header">
        <span className="course-label">TODAY'S COURSE</span>
        <div className="course-nav-btns">
          <button className="course-arrow" onClick={prev} disabled={current === 0}>←</button>
          <button className="course-arrow" onClick={next} disabled={current === articles.length - 1}>→</button>
        </div>
      </div>
      <div className="course-track" ref={trackRef}>
        {articles.map((article) => (
          <div key={article.id} className="course-card">
            <div className="course-card-tags">
              <span className="card-category">{article.category}</span>
            </div>
            <div className="course-card-image">
              {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
            </div>
            <h3 className="course-card-title">{article.title}</h3>
            <p className="course-card-desc">{article.description}</p>
            <div className="course-card-footer">
              <span>{article.author}</span>
              {article.createdAt && <span>{calcTimeAgo(article.createdAt)}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseSlider;