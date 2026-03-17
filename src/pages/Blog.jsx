import { PostCard } from '../components/PostCard';
import { posts } from '../data/posts';
import './Blog.css';

export function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-page__header">
        <div className="container">
          <h1 className="blog-page__title">
            <span className="blog-page__title-emoji" aria-hidden="true">📖</span>
            Blog
          </h1>
          <p className="blog-page__desc">
            Resenhas, listas e reflexões para quem ama terror mas não dispensa
            uma coberta e a luz acesa. Leitura segura — prometemos.
          </p>
        </div>
      </header>
      <div className="container blog-page__list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
