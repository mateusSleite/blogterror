import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="container container--wide header__inner">
        <Link to="/" className="header__logo" aria-label="Coberta até o Pescoço — Início">
          <span className="header__logo-text">Coberta até o Pescoço</span>
          <span className="header__tagline">Terror com coração na mão (e coberta no ombro)</span>
        </Link>
        <nav className="header__nav" aria-label="Navegação principal">
          <Link
            to="/"
            className={`header__link ${isHome ? 'header__link--active' : ''}`}
          >
            Início
          </Link>
          <Link
            to="/blog"
            className={`header__link ${location.pathname === '/blog' ? 'header__link--active' : ''}`}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
