import React from 'react';
import Link from '@docusaurus/Link';
import SiteLayout from '../components/site/SiteLayout';
import {FeatureCard, SectionTitle} from '../components/site/MarketingComponents';

const steps = [
  {title: 'Présentez votre besoin', text: 'Expliquez rapidement votre club, votre contexte et ce que vous souhaitez gérer.'},
  {title: 'Recevez les informations', text: 'Vous obtenez les détails nécessaires pour accéder à l’application et démarrer correctement.'},
  {title: 'Installez et utilisez', text: 'L’application est pensée pour une utilisation locale, simple et structurée.'},
];

export default function ObtenirClubManager(): React.ReactNode {
  return (
    <SiteLayout
      title="Obtenir ClubManager"
      description="Découvrez comment obtenir ClubManager, l’application de gestion pour clubs, associations et petites organisations."
    >
      <section className="site-page-hero">
        <div className="site-container site-page-hero__grid">
          <div>
            <span className="site-eyebrow">Obtenir l’application</span>
            <h1>Démarrez avec ClubManager simplement.</h1>
            <p>
              ClubManager est distribué de façon volontairement simple. L’objectif est de proposer un outil utile aux petites
              organisations sans imposer une infrastructure lourde ou un abonnement complexe.
            </p>
            <div className="site-actions">
              <a href="https://forms.gle/gbhjLEfzr83Y5XNm7" className="site-button site-button--primary">Faire une demande</a>
              <Link to="/documentation/installation" className="site-button site-button--secondary">Lire l’installation</Link>
            </div>
          </div>
          <div className="site-info-panel">
            <h2>Informations rapides</h2>
            <dl>
              <div><dt>Plateforme</dt><dd>Windows</dd></div>
              <div><dt>Type</dt><dd>Application locale</dd></div>
              <div><dt>Usage</dt><dd>Clubs, associations, petites organisations</dd></div>
              <div><dt>Accès</dt><dd>Demande manuelle / contribution libre</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="Processus"
            title="Une mise en route en trois étapes"
            text="Le parcours est volontairement clair afin de faciliter l’adoption par les personnes qui gèrent le club au quotidien."
          />
          <div className="site-grid site-grid--3">
            {steps.map((step, index) => (
              <article className="site-card site-step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-container site-split">
          <div>
            <SectionTitle
              eyebrow="Ce que vous obtenez"
              title="Un outil complet pour gérer l’essentiel"
              text="ClubManager couvre les besoins courants d’un club : membres, présences, finances, infolettres, rapports et configuration."
            />
            <div className="site-grid site-grid--2 site-grid--compact">
              <FeatureCard icon="👥" title="Membres" text="Une base claire pour suivre les informations importantes." />
              <FeatureCard icon="📊" title="Rapports" text="Des sorties utiles pour comprendre l’activité du club." />
              <FeatureCard icon="💳" title="Transactions" text="Un suivi financier structuré par catégories." />
              <FeatureCard icon="📣" title="Communication" text="Des outils pour rester en contact avec les membres." />
            </div>
          </div>
          <div className="site-browser-card site-browser-card--small">
            <div className="site-browser-card__bar"><span /><span /><span /></div>
            <img src="/clubmanager/img/screenshots/parametres.png" alt="Paramètres de ClubManager" />
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container site-note-card">
          <div>
            <span className="site-eyebrow">Contribution libre</span>
            <h2>Un modèle accessible pour les petites structures.</h2>
            <p>
              Le projet privilégie l’accessibilité : l’accès se fait manuellement après échange, avec une approche adaptée aux clubs
              et organisations qui veulent un outil concret sans engagement complexe.
            </p>
          </div>
          <Link to="/contact" className="site-button site-button--primary">Contacter le développeur</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
