import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

const navigation = [
  {label: 'Accueil', to: '/'},
  {label: 'Obtenir l’app', to: '/obtenir-clubmanager'},
  {label: 'À propos', to: '/a-propos'},
  {label: 'Contact', to: '/contact'},
  {label: 'Documentation', to: '/documentation/intro'},
];

function isCurrent(pathname: string, target: string) {
  if (target === '/') return pathname === '/clubmanager/' || pathname === '/';
  return pathname.endsWith(target) || pathname.includes(`${target}/`);
}

export default function SiteHeader(): React.ReactNode {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-container site-header__inner">
        <Link to="/" className="site-brand" aria-label="ClubManager - Accueil">
          <img src="/clubmanager/img/logo.png" alt="" className="site-brand__logo" />
          <span className="site-brand__text">ClubManager</span>
        </Link>

        <nav className="site-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} className={`site-nav__link ${isCurrent(location.pathname, item.to) ? 'is-active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="site-menu-button" type="button" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="site-mobile-panel">
          <div className="site-container site-mobile-panel__inner">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className={`site-mobile-panel__link ${isCurrent(location.pathname, item.to) ? 'is-active' : ''}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
