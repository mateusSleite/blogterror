import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/posts';
import './Post.css';

export function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container post-page">
        <p>Post não encontrado.</p>
        <Link to="/blog">← Voltar ao blog</Link>
      </div>
    );
  }

  const dateFormatted = new Date(post.date + 'T12:00:00').toLocaleDateString(
    'pt-BR',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <article className="post-page">
      <header className="post-page__header">
        <div className="container">
          <Link to="/blog" className="post-page__back">
            ← Voltar ao blog (respira, já acabou o susto)
          </Link>
          <span className="post-page__category">{post.category}</span>
          <h1 className="post-page__title">{post.title}</h1>
          <p className="post-page__meta">
            <time dateTime={post.date}>{dateFormatted}</time>
            <span className="post-page__dot">·</span>
            <span>{post.readTime} de leitura</span>
          </p>
        </div>
      </header>
      <div className="container post-page__body">
        <p className="post-page__excerpt">{post.excerpt}</p>
        <div className="post-page__content">
          <p>
            Este é um post de exemplo. Quando você integrar um backend ou CMS,
            o conteúdo completo virá daqui. Por enquanto, aproveite a estrutura
            e o clima do blog.
          </p>
          <p>
            O tema &quot;Coberta até o Pescoço&quot; é para quem gosta de filme de terror
            mas tem medo — e está tudo bem. Aqui a gente fala de resenhas,
            listas para iniciantes e dicas para assistir sem passar vergonha
            (ou pelo menos com vergonha assumida).
          </p>
        </div>
      </div>
    </article>
  );
}
