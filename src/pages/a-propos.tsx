import React from 'react';
import Link from '@docusaurus/Link';
import SiteLayout from '../components/site/SiteLayout';
import {CtaBand, FeatureCard, SectionTitle} from '../components/site/MarketingComponents';

const values = [
  {icon: '🎯', title: 'Simplicité', text: 'Un logiciel compréhensible, même pour une équipe qui n’a pas de profil technique.'},
  {icon: '🧩', title: 'Centralisation', text: 'Les informations importantes regroupées dans un seul environnement de travail.'},
  {icon: '🤝', title: 'Accessibilité', text: 'Une approche pensée pour les clubs, associations et petites organisations.'},
  {icon: '🔍', title: 'Transparence', text: 'Une application claire, documentée, et orientée vers les besoins réels.'},
];

export default function APropos(): React.ReactNode {
  return (
    <SiteLayout
      title="À propos de ClubManager"
      description="Découvrez la vision derrière ClubManager, logiciel de gestion pour clubs, associations et petites organisations."
    >
      <section className="site-page-hero">
        <div className="site-container site-page-hero__grid">
          <div>
            <span className="site-eyebrow">À propos</span>
            <h1>Un outil né d’un besoin concret : mieux organiser les petites structures.</h1>
            <p>
              ClubManager a été pensé pour simplifier le quotidien des personnes qui gèrent un club ou une association. L’objectif :
              remplacer les fichiers dispersés par une application cohérente, claire et agréable à utiliser.
            </p>
          </div>
          <div className="site-browser-card site-browser-card--small">
            <div className="site-browser-card__bar"><span /><span /><span /></div>
            <img src="/clubmanager/img/screenshots/infolettre.png" alt="Infolettre dans ClubManager" />
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container site-story">
          <SectionTitle eyebrow="Vision" title="Professionnel, mais pas compliqué." />
          <div className="site-story__content">
            <p>
              Beaucoup de clubs fonctionnent encore avec plusieurs fichiers, des listes séparées et des suivis manuels. Cela fonctionne
              au début, puis devient vite difficile à maintenir lorsque les membres, présences et transactions s’accumulent.
            </p>
            <p>
              ClubManager propose une alternative plus structurée : une application locale qui rassemble les modules essentiels dans
              une interface moderne, sans imposer une solution trop lourde pour une petite équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-container">
          <SectionTitle
            eyebrow="Valeurs"
            title="Les principes qui guident le projet"
            text="Chaque écran vise à rester utile, lisible et directement exploitable par les responsables du club."
          />
          <div className="site-grid site-grid--4">
            {values.map((value) => <FeatureCard key={value.title} {...value} />)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container site-info-grid">
          <div className="site-info-panel">
            <h2>Fiche produit</h2>
            <dl>
              <div><dt>Nom</dt><dd>ClubManager</dd></div>
              <div><dt>Plateforme</dt><dd>Windows</dd></div>
              <div><dt>Type</dt><dd>Application locale de gestion</dd></div>
              <div><dt>Public</dt><dd>Clubs, associations et petites organisations</dd></div>
              <div><dt>Développeur</dt><dd><a href='https://plumedours.github.io/portfolio/' target='_blank'>Maxime Bory</a></dd></div>
            </dl>
          </div>
          <div className="site-card site-large-card">
            <h2>Une application évolutive</h2>
            <p>
              Le projet peut continuer à évoluer selon les retours, les besoins terrain et les modules les plus utiles pour les
              responsables d’organisation. La documentation reste disponible séparément pour accompagner l’installation et l’usage.
            </p>
            <Link to="/documentation/intro" className="site-inline-link">Consulter la documentation →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
