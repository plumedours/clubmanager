import React from 'react';
import Link from '@docusaurus/Link';
import SiteLayout from '../components/site/SiteLayout';
import {CtaBand, FeatureCard, ScreenshotCard, SectionTitle} from '../components/site/MarketingComponents';

const features = [
  {icon: '👥', title: 'Membres', text: 'Gardez une fiche claire pour chaque membre, avec les informations utiles accessibles rapidement.'},
  {icon: '✅', title: 'Présences', text: 'Suivez les présences et obtenez une vue concrète de la participation au fil du temps.'},
  {icon: '💳', title: 'Finances', text: 'Classez les transactions, surveillez les revenus et dépenses, et simplifiez le suivi interne.'},
  {icon: '📣', title: 'Infolettre', text: 'Communiquez plus facilement avec vos membres grâce à des outils intégrés.'},
  {icon: '📊', title: 'Rapports', text: 'Générez des rapports lisibles pour mieux comprendre l’activité de votre organisation.'},
  {icon: '⚙️', title: 'Paramètres', text: 'Adaptez l’application à votre fonctionnement sans vous perdre dans une configuration lourde.'},
];

const screenshots = [
  {src: '/clubmanager/img/screenshots/dashboard-2.png', alt: 'Tableau de bord ClubManager', title: 'Vue d’ensemble', text: 'Un tableau de bord pour comprendre rapidement l’état du club.'},
  {src: '/clubmanager/img/screenshots/membres.png', alt: 'Gestion des membres ClubManager', title: 'Gestion des membres', text: 'Des fiches structurées pour retrouver les bonnes informations au bon moment.'},
  {src: '/clubmanager/img/screenshots/finances.png', alt: 'Gestion financière ClubManager', title: 'Suivi financier', text: 'Un espace clair pour organiser les transactions et catégories.'},
];

export default function Home(): React.ReactNode {
  return (
    <SiteLayout
      title="ClubManager - Logiciel de gestion de club"
      description="ClubManager centralise les membres, présences, finances, communications et rapports pour les clubs, associations et petites organisations."
    >
      <section className="site-hero">
        <div className="site-hero__bg" />
        <div className="site-container site-hero__grid">
          <div className="site-hero__content">
            <span className="site-eyebrow">Logiciel de gestion pour clubs</span>
            <h1>Une gestion de club simple, centralisée et professionnelle.</h1>
            <p>
              ClubManager aide les clubs, associations et petites organisations à gérer leurs membres, présences, finances,
              communications et rapports dans une application claire, locale et accessible.
            </p>
            <div className="site-actions">
              <Link to="/obtenir-clubmanager" className="site-button site-button--primary">Obtenir l’application</Link>
              <Link to="/documentation/intro" className="site-button site-button--secondary">Voir la documentation</Link>
            </div>
            <div className="site-hero__stats" aria-label="Points forts">
              <div><strong>6+</strong><span>modules clés</span></div>
              <div><strong>100%</strong><span>pensé club</span></div>
              <div><strong>Windows</strong><span>application locale</span></div>
            </div>
          </div>
          <div className="site-hero__visual">
            <div className="site-browser-card">
              <div className="site-browser-card__bar"><span /><span /><span /></div>
              <img src="/clubmanager/img/screenshots/dashboard-2.png" alt="Aperçu du tableau de bord ClubManager" />
            </div>
          </div>
        </div>
      </section>

      <section id="fonctionnalites" className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="Modules essentiels"
            title="Tout ce qu’il faut pour piloter une petite organisation"
            text="Le site présente un outil complet sans complexifier le quotidien des bénévoles, responsables et administrateurs."
          />
          <div className="site-grid site-grid--3">
            {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-container site-split">
          <div>
            <span className="site-eyebrow">Expérience utilisateur</span>
            <h2>Une interface propre qui va droit au but.</h2>
            <p>
              ClubManager met l’information importante en avant : tableaux, actions rapides, statistiques et navigation claire.
              L’objectif est de réduire le temps passé à chercher, corriger ou compiler des données.
            </p>
            <ul className="site-check-list">
              <li>Navigation simple entre les grands modules.</li>
              <li>Écrans lisibles pour une utilisation régulière.</li>
              <li>Rapports et suivis adaptés à la réalité des petites structures.</li>
            </ul>
          </div>
          <div className="site-image-stack">
            <img src="/clubmanager/img/screenshots/presences.png" alt="Suivi des présences dans ClubManager" />
            <img src="/clubmanager/img/screenshots/rapports.png" alt="Rapports ClubManager" />
          </div>
        </div>
      </section>

      <section className="site-section">
  <div className="site-container">
    <div className="site-trust-panel">
      <span className="site-eyebrow">
        Développement terrain
      </span>

      <h2>
        Développé et utilisé dans un environnement réel.
      </h2>

      <p>
        ClubManager évolue avec les besoins concrets d’un club actif afin d’améliorer continuellement l’expérience, les fonctionnalités et la stabilité du logiciel.
      </p>
    </div>
  </div>
</section>

      <section id="captures" className="site-section">
        <div className="site-container">
          <SectionTitle
            eyebrow="Aperçu"
            title="Des écrans concrets pour des besoins concrets"
            text="Les captures existantes du projet sont mises en valeur pour montrer rapidement ce que l’application permet de faire."
          />
          <div className="site-grid site-grid--3">
            {screenshots.map((item) => <ScreenshotCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="site-section site-section--soft">
        <div className="site-container site-process">
          <SectionTitle
            eyebrow="Pourquoi ClubManager"
            title="Moins de fichiers dispersés. Plus de visibilité."
          />
          <div className="site-process__grid">
            <div><span>01</span><h3>Centraliser</h3><p>Rassembler les données importantes de l’organisation au même endroit.</p></div>
            <div><span>02</span><h3>Suivre</h3><p>Consulter les présences, transactions et rapports sans montage manuel.</p></div>
            <div><span>03</span><h3>Décider</h3><p>Obtenir une vision plus claire pour organiser les activités et priorités.</p></div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
