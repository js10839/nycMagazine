import { useState, useEffect } from 'react';

const CATEGORIES = ['ALL', 'ART', 'STREET ART', 'SCULPTURES'];
const EMPTY_FORM = { title: '', category: 'ART', description: '', author: '' };

function NewArticleModal({ onClose, onSubmit, publishing }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim() || !form.author.trim()) {
      setError('Title, description, and author are required.');
      return;
    }
    onSubmit(form, imageFile);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">New Article</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Title *
            <input name="title" value={form.title} onChange={handleChange} placeholder="Article title" />
          </label>
          <label>
            Category
            <select name="category" value={form.category} onChange={handleChange}>
              {CATEGORIES.filter(c => c !== 'ALL').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label>
            Description *
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Write your article content..." rows={5} />
          </label>
          <label>
            Author *
            <input name="author" value={form.author} onChange={handleChange} placeholder="Your name" />
          </label>
          <label>
            Image
            <input type="file" accept="image/*" onChange={handleImage} className="file-input" />
          </label>
          {preview && <img src={preview} alt="Preview" className="image-preview" />}
          {error && <p className="form-error">{error}</p>}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose} disabled={publishing}>Cancel</button>
            <button type="submit" className="btn-primary" disabled={publishing}>
              {publishing ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewArticleModal;
