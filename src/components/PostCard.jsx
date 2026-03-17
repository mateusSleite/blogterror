import { Link } from 'react-router-dom';
import './PostCard.css';

export function PostCard({ post, variant = 'default' }) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`post-card ${isFeatured ? 'post-card--featured' : ''}`}
      aria-labelledby={`post-title-${post.id}`}
      style={post.image ? { '--post-card-bg': `url(${post.image})` } : undefined}
    >
      {post.image && <span className="post-card__bg" aria-hidden="true" />}
      <Link to={`/blog/${post.slug}`} className="post-card__link">
        <span className="post-card__category">{post.category}</span>
        <h2 id={`post-title-${post.id}`} className="post-card__title">
          {post.title}
        </h2>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <footer className="post-card__meta">
          <time dateTime={post.date}>
            {new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span className="post-card__dot" aria-hidden="true">·</span>
          <span>{post.readTime} de leitura</span>
        </footer>
      </Link>
    </article>
  );
}
