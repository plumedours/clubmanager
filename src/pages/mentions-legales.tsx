import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Navbar from '../components/Navbar';

export default function MentionsLegales(): React.ReactNode {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout 
      title="Mentions légales" 
      description="Mentions légales de ClubManager - Québec, Canada"
    >
      <main className="min-h-screen bg-white">
        <Navbar />

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="animate-on-scroll">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Mentions <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">légales</span>
              </h1>
              <p className="mt-4 text-slate-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-CA')}</p>
            </div>

            <div className="mt-12 space-y-8">
              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Éditeur du site</h2>
                <div className="mt-4 space-y-2 text-slate-600">
                  <p><strong>ClubManager</strong></p>
                  <p>Développé par Maxime Bory (particulier - développeur amateur)</p>
                  <p>Province : Québec, Canada</p>
                  <p>Email : <a href="mailto:bory.maxime@gmail.com" className="text-blue-600 hover:underline">bory.maxime@gmail.com</a></p>
                  <p>Portfolio : <a href="https://plumedours.github.io/portfolio/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://plumedours.github.io/portfolio/</a></p>
                  <p className="text-sm text-slate-500 mt-2">※ Micro-entreprise / Entreprise individuelle - Non inscrit au registre du commerce (activité non commerciale)</p>
                </div>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Hébergement</h2>
                <div className="mt-4 space-y-2 text-slate-600">
                  <p>Ce site est hébergé par <strong>GitHub Pages</strong></p>
                  <p>GitHub, Inc.<br />
                  88 Colin P. Kelly Jr. Street<br />
                  San Francisco, CA 94107<br />
                  États-Unis</p>
                </div>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Propriété intellectuelle</h2>
                <p className="mt-4 text-slate-600">
                  L'application ClubManager et l'ensemble des contenus présents sur ce site (textes, images, logos, etc.) 
                  sont protégés par les droits d'auteur. Toute reproduction, modification ou distribution sans autorisation est interdite.
                </p>
                <p className="mt-2 text-slate-600">
                  ClubManager est une application distribuée sous le modèle du <strong>prix libre</strong>. Son code source n'est pas public.
                </p>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Crédits et attributions</h2>
                
                <div className="mt-4 space-y-3 text-slate-600">
                    <div className="border-l-4 border-blue-200 pl-4 py-2">
                    <p className="font-semibold text-slate-800">Icône de l'application</p>
                    <p className="text-sm">
                        L'icône utilisée pour ClubManager est une création de 
                        <strong> Muhammad_Usman</strong> sur la plateforme 
                        <a href="https://www.flaticon.com/free-icons/project-management" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-600 hover:underline ml-1">
                        Flaticon
                        </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                        Licence : Flaticon Basic License / Free for personal and commercial use with attribution
                    </p>
                    </div>
                    
                    {/* Vous pouvez ajouter d'autres crédits ici si nécessaire */}
                </div>
                </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Formulaire de contact</h2>
                <p className="mt-4 text-slate-600">
                  Le formulaire de contact utilise <strong>Google Forms</strong> (Google LLC, États-Unis). 
                  Les informations transmises via ce formulaire sont envoyées par email au développeur et ne sont pas conservées par Google après traitement.
                </p>
                <p className="mt-2 text-slate-600">
                  Aucune donnée sensible n'est demandée. Vous pouvez également contacter directement le développeur par email.
                </p>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Distribution internationale</h2>
                <p className="mt-4 text-slate-600">
                  ClubManager est distribué depuis le Québec, Canada, et est accessible aux utilisateurs du monde entier, 
                  y compris en France et dans l'Union européenne.
                </p>
                <p className="mt-2 text-slate-600">
                  Les utilisateurs sont responsables de vérifier la conformité de l'utilisation du logiciel avec les lois 
                  de leur juridiction locale.
                </p>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Limitation de responsabilité</h2>
                <p className="mt-4 text-slate-600">
                  L'utilisateur est informé que l'utilisation de ClubManager se fait sous sa propre responsabilité. 
                  Le développeur, en tant que particulier amateur, ne saurait être tenu responsable des éventuels dommages 
                  directs ou indirects liés à l'utilisation du logiciel.
                </p>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Protection des données personnelles</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">Québec (Loi 25)</h3>
                <p className="text-slate-600">
                  Conformément à la Loi 25 du Québec sur la protection des renseignements personnels :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600 ml-4">
                  <li>Aucune donnée personnelle n'est collectée automatiquement sur ce site</li>
                  <li>ClubManager est une application locale - vos données sont stockées sur votre propre base de données</li>
                  <li>Le formulaire Google Forms transmet vos informations directement au développeur</li>
                  <li>Pour toute question sur vos données : <a href="mailto:bory.maxime@gmail.com" className="text-blue-600 hover:underline">bory.maxime@gmail.com</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">France et Union européenne (RGPD)</h3>
                <p className="text-slate-600">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600 ml-4">
                  <li>Ce site ne collecte aucune donnée personnelle sans consentement explicite</li>
                  <li>L'application fonctionne localement - vos données vous appartiennent</li>
                  <li>Les informations du formulaire de contact sont traitées manuellement</li>
                  <li>Vous pouvez demander la suppression de vos données à tout moment</li>
                  <li>Contact RGPD : <a href="mailto:bory.maxime@gmail.com" className="text-blue-600 hover:underline">bory.maxime@gmail.com</a></li>
                </ul>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Cookies</h2>
                <p className="mt-4 text-slate-600">
                  Ce site n'utilise pas de cookies de traçage. Aucun consentement cookie n'est donc requis, 
                  conformément aux réglementations québécoise et européenne.
                </p>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Droit applicable et juridiction</h2>
                <p className="mt-4 text-slate-600">
                  Les présentes mentions légales sont régies par le droit de la province de <strong>Québec, Canada</strong>.
                </p>
                <p className="mt-2 text-slate-600">
                  En cas de litige, les tribunaux de la province de Québec seront seuls compétents.
                </p>
              </section>

              <section className="animate-on-scroll rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
                <p className="mt-4 text-slate-600">
                  Pour toute question concernant ces mentions légales, le projet ClubManager, ou vos données personnelles :<br />
                  Email : <a href="mailto:bory.maxime@gmail.com" className="text-blue-600 hover:underline">bory.maxime@gmail.com</a><br />
                  Formulaire : <a href="https://forms.gle/3EGhFqtcWFD8rTiNA" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Formulaire de contact</a>
                </p>
              </section>

              <div className="text-center text-sm text-slate-400 pt-4">
                <p>ClubManager - Application de gestion pour clubs et associations</p>
                <p>Développeur amateur indépendant - Québec, Canada</p>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .animate-on-scroll.animate-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </main>
    </Layout>
  );
}