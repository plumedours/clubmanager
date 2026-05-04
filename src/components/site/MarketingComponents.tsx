import React from 'react';
import Link from '@docusaurus/Link';

export function Icon({children}: {children: React.ReactNode}): React.ReactNode {
  return <span className="site-icon" aria-hidden="true">{children}</span>;
}

export function SectionEyebrow({children}: {children: React.ReactNode}): React.ReactNode {
  return <span className="site-eyebrow">{children}</span>;
}

export function SectionTitle({eyebrow, title, text}: {eyebrow?: string; title: string; text?: string}): React.ReactNode {
  return (
    <div className="site-section-title">
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function FeatureCard({icon, title, text}: {icon: React.ReactNode; title: string; text: string}): React.ReactNode {
  return (
    <article className="site-card site-feature-card">
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function ScreenshotCard({src, alt, title, text}: {src: string; alt: string; title: string; text: string}): React.ReactNode {
  return (
    <article className="site-screenshot-card">
      <img src={src} alt={alt} loading="lazy" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export function CtaBand(): React.ReactNode {
  return (
    <section className="site-section site-cta-band">
      <div className="site-container site-cta-band__inner">
        <div>
          <span className="site-eyebrow site-eyebrow--light">Prêt à simplifier votre gestion?</span>
          <h2>Centralisez votre club dans un outil professionnel, sans complexité inutile.</h2>
          <p>ClubManager rassemble les membres, présences, finances, communications et rapports dans une expérience claire.</p>
        </div>
        <div className="site-cta-band__actions">
          <Link to="/obtenir-clubmanager" className="site-button site-button--light">Obtenir l’application</Link>
          <Link to="/contact" className="site-button site-button--ghost-light">Nous contacter</Link>
        </div>
      </div>
    </section>
  );
}
