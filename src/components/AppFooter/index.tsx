import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const productLinks: FooterSection[] = [
  {
    title: 'ClubManager',
    links: [
      { label: 'Accueil', to: '/' },
      { label: 'Fonctionnalités', to: '/#fonctionnalites' },
      { label: 'Captures d’écran', to: '/#captures' },
      { label: 'Obtenir ClubManager', to: '/obtenir-clubmanager' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Documentation', to: '/documentation/intro' },
      { label: 'FAQ', to: '/faq' },
      { label: 'À propos', to: '/a-propos' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', to: '/mentions-legales' },
    ],
  },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  const content = (
    <>
      <span>{link.label}</span>
      {link.href && <span className={styles.externalIcon}>↗</span>}
    </>
  );

  if (link.href) {
    return (
      <a
        className={styles.footerLink}
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={styles.footerLink} to={link.to ?? '/'}>
      {content}
    </Link>
  );
}

export default function AppFooter(): React.ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        
        <nav className={styles.linksGrid} aria-label="Navigation du pied de page">
          {productLinks.map((section) => (
            <div className={styles.linkColumn} key={section.title}>
              <h3 className={styles.linkTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year} ClubManager. Tous droits réservés.
          </p>

          <div className={styles.signature}>
            <span>Développé avec soin pour les clubs et associations.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
