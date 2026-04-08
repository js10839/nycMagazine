import { calcTimeAgo } from '../utils/readTime';

function ArticleCard({ article, onDelete }) {
  return (
    <div className="card">
      <div className="card-tags">
        <span className="card-category">{article.category}</span>
      </div>
      <div className="card-image">
        {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
      </div>
      <h3 className="card-title">{article.title}</h3>
      <p className="card-description">{article.description}</p>
      <div className="card-footer">
        <span className="card-date">{article.date}</span>
        <span><strong>Text</strong> {article.author}</span>
        <span><strong>Posted</strong> {article.createdAt ? calcTimeAgo(article.createdAt) : article.duration}</span>
        <button className="delete-btn" onClick={() => onDelete(article.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ArticleCard;
