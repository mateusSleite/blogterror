import { Link } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { getFeaturedPosts } from '../data/posts';
import './Home.css';

export function Home() {
  const featured = getFeaturedPosts();

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero__content">
          <span className="hero__badge" aria-hidden="true">
            🧤 Sustos 100% controlados
          </span>
          <p className="hero__label">Blog para quem ama terror mas tem medo</p>
          <h1 className="hero__title">
            <span className="hero__title-emoji" aria-hidden="true">👻</span>
            Coberta até o Pescoço
          </h1>
          <p className="hero__lead">
            Resenhas, listas e reflexões para quem assiste filme de terror
            com o coração na mão — e sem vergonha de dormir de luz acesa.
          </p>
          <Link to="/blog" className="btn btn--accent hero__cta">
            Ver todos os posts
          </Link>
        </div>
        <div className="hero__vignette" aria-hidden="true" />
      </section>

      <section className="featured">
        <div className="container">
          <h2 className="featured__heading">Em destaque</h2>
          <div className="featured__grid">
            {featured.map((post) => (
              <PostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
          <p className="featured__more">
            <Link to="/blog">Ver todo o blog →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
