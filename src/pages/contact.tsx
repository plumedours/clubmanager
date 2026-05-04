import React from 'react';
import Link from '@docusaurus/Link';
import SiteLayout from '../components/site/SiteLayout';
import {FeatureCard, SectionTitle} from '../components/site/MarketingComponents';

const contactFormUrl = 'https://forms.gle/gbhjLEfzr83Y5XNm7';
const contactFormEmbedUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdom2H09WGgY60BrLlTcrlCc7f8xvrFYf0JqZ9BJYwMWNIAYw/viewform?embedded=true';

const reasons = [
  {icon: '💬', title: 'Question générale', text: 'Obtenir plus d’informations sur le fonctionnement, la distribution ou l’utilisation.'},
  {icon: '🧪', title: 'Essai / accès', text: 'Présenter votre club et demander les détails pour obtenir l’application.'},
  {icon: '🛠️', title: 'Support', text: 'Consulter la documentation ou demander de l’aide pour une situation particulière.'},
];

export default function Contact(): React.ReactNode {
  return (
    <SiteLayout
      title="Contact - ClubManager"
      description="Contactez le développeur de ClubManager pour une question, une demande d’accès ou du support."
    >
      <section className="site-page-hero">
        <div className="site-container site-page-hero__grid">
          <div>
            <span className="site-eyebrow">Contact</span>
            <h1>Une question sur ClubManager?</h1>
            <p>
              Que ce soit pour obtenir l’application, poser une question ou mieux comprendre si ClubManager convient à votre organisation,
              vous pouvez passer par ce point de contact.
            </p>
            <div className="site-actions">
              <a href={contactFormUrl} target="_blank" rel="noreferrer" className="site-button site-button--primary">Ouvrir le formulaire Google</a>
              <Link to="/documentation/intro" className="site-button site-button--secondary">Voir la documentation</Link>
            </div>
          </div>
          <div className="site-contact-card">
            <h2>Coordonnées</h2>
            <p>Le formulaire Google est le moyen principal pour envoyer une demande structurée au sujet de ClubManager.</p>
            <a href={contactFormUrl} target="_blank" rel="noreferrer">Accéder au formulaire de contact</a>
            <span>Vous pouvez y préciser votre organisation, votre besoin et votre contexte d’utilisation.</span>
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-container">
          <SectionTitle eyebrow="Formulaire" title="Envoyez votre demande avec le formulaire Google" text="Le formulaire permet de centraliser les demandes et d’obtenir les informations utiles dès le premier message." />
          <div className="site-google-form-card">
            <iframe src={contactFormEmbedUrl} title="Formulaire de contact ClubManager" loading="lazy">Chargement…</iframe>
          </div>
          <p className="site-form-fallback">Si le formulaire ne s’affiche pas correctement, <a href={contactFormUrl} target="_blank" rel="noreferrer">ouvrez-le dans un nouvel onglet</a>.</p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="Demandes fréquentes"
            title="Pour mieux orienter votre message"
            text="Quelques exemples de sujets utiles à préciser lorsque vous contactez le développeur."
          />
          <div className="site-grid site-grid--3">
            {reasons.map((item) => <FeatureCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-container site-contact-layout">
          <div>
            <SectionTitle eyebrow="Avant d’écrire" title="La documentation peut déjà répondre à plusieurs questions." />
            <p>
              Les pages de documentation expliquent l’installation, la configuration, les modules de membres, présences, transactions,
              rapports et paramètres. Elles restent séparées du site marketing afin de conserver une structure claire.
            </p>
            <Link to="/documentation/intro" className="site-inline-link">Ouvrir la documentation →</Link>
          </div>
          <div className="site-browser-card site-browser-card--small">
            <div className="site-browser-card__bar"><span /><span /><span /></div>
            <img src="/clubmanager/img/screenshots/rapports.png" alt="Rapports ClubManager" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
