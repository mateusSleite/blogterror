import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container container--wide footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Coberta até o Pescoço</Link>
          <p className="footer__tagline">
            Para quem ama filme de terror mas tem medo. Você não está sozinho — e a luz acesa é opcional.
          </p>
        </div>
        <nav className="footer__nav" aria-label="Navegação do rodapé">
          <Link to="/">Início</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <p className="footer__copy">
          © {year} Coberta até o Pescoço. Feito com medo e carinho.
        </p>
        <p className="footer__credits">
          Fotos de fundo: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </p>
      </div>
    </footer>
  );
}
