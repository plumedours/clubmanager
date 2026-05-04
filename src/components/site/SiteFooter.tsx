import React from 'react';
import Link from '@docusaurus/Link';

const year = new Date().getFullYear();

export default function SiteFooter(): React.ReactNode {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-brand site-brand--footer">
            <img src="/clubmanager/img/logo.png" alt="" className="site-brand__logo" />
            <span className="site-brand__text">ClubManager</span>
          </Link>
          <p>Un logiciel clair et complet pour centraliser la gestion d’un club, d’une association ou d’une petite organisation.</p>
        </div>

        <div>
          <h3>Site</h3>
          <Link to="/">Accueil</Link>
          <Link to="/obtenir-clubmanager">Obtenir l’application</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Ressources</h3>
          <Link to="/documentation/intro">Documentation</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/documentation/infolettre">Module infolettre</Link>
        </div>

        <div>
          <h3>Application</h3>
          <p className="site-footer__small">Windows · Gestion locale · Clubs et petites organisations</p>
          <Link to="/contact" className="site-footer__contact">Demander une information</Link>
        </div>
      </div>
      <div className="site-container site-footer__bottom">
        <span>© {year} ClubManager. Tous droits réservés.</span>

        <span className="footer-credit">
          Développé par{" "}
          <a href="https://plumedours.github.io/portfolio/" target="_blank" rel="noreferrer">
            Maxime Bory
          </a>.
        </span>
      </div>
    </footer>
  );
}
