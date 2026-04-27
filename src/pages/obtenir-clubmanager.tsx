import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Navbar from '../components/Navbar';

export default function ObtenirClubManager(): React.ReactNode {
  const [scrolled, setScrolled] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Layout 
      title="Prix libre - Obtenir ClubManager" 
      description="Obtenez ClubManager avec une contribution libre. Choisissez le montant qui correspond à vos moyens et à l'utilisation que vous faites du logiciel."
    >
      <main className="min-h-screen bg-white">
        {/* Navbar flottante */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative  overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center animate-on-scroll">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                ClubManager est proposé avec un{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  prix libre
                </span>
              </h1>
              <p className="mx-auto mt-6 w-full text-lg text-slate-600 sm:text-xl leading-relaxed">
                Vous choisissez le montant que vous souhaitez offrir selon votre utilisation, 
                vos moyens et la valeur que le logiciel apporte à votre organisation.
              </p>
            </div>
          </div>
        </section>

        {/* Section de contribution */}
        <section className="relative -mt-20 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll">
              <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl text-center">
                    Choisissez votre contribution
                  </h2>
                  <p className="mt-2 text-center text-slate-600">
                    Le montant est libre. Chaque contribution soutient le développement du projet.
                  </p>

                  {/* Montant personnalisé */}
                  {selectedAmount === 'Personnalisé' && (
                    <div className="mt-6 animate-fade-in-up">
                      <input
                        type="number"
                        placeholder="Montant personnalisé (€)"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-center text-lg font-medium text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  )}

                  {/* Boutons d'action */}
                  <div className="my-10 flex flex-wrap justify-center gap-4">
                    <a
                      href="https://ko-fi.com/borymaxime"
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                    >
                      <span className="relative z-10 text-white">Contribuer librement →</span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                    </a>
                    <Link
                      to="/contact"
                      className="inline-block rounded-full border-2 border-slate-200 bg-white px-8 py-4 font-medium text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:scale-105"
                      style={{ 
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformOrigin: 'center'
                      }}
                    >
                      Poser une question
                    </Link>
                  </div>

                  <p className="mt-6 text-center text-sm text-slate-500">
                    🔒 Transaction sécurisée via Ko-fi • Aucune donnée bancaire n'est stockée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Étapes */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Comment ça fonctionne
                </span>
              </h2>
              <p className="mx-auto mt-4 w-full text-lg text-slate-600">
                Un processus simple et transparent en 3 étapes
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Choisissez votre contribution',
                  description: 'Vous déterminez librement le montant que vous souhaitez offrir pour soutenir le projet.',
                  icon: '💰',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  step: '2',
                  title: 'Envoyez votre demande',
                  description: 'Après la contribution, utilisez la page Contact pour transmettre les informations nécessaires.',
                  icon: '📧',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  step: '3',
                  title: 'Recevez les instructions',
                  description: 'L’accès au logiciel et les consignes d’installation sont transmis manuellement sous 48h.',
                  icon: '🎉',
                  color: 'from-green-500 to-green-600'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group animate-on-scroll rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    {/* <div className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-3 text-2xl text-white shadow-lg transition-transform group-hover:scale-110`}>
                      {item.icon}
                    </div> */}
                    <div className="flex h-12 w-12 mb-5 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-blue-600">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Pourquoi prix libre */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12 ring-1 ring-blue-100">
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"></div>
                
                <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                      Pourquoi un{' '}
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        prix libre
                      </span>
                      ?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                      L’objectif est de rendre ClubManager accessible aux petits clubs et associations, 
                      tout en permettant de soutenir son développement, sa documentation et ses améliorations futures.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link 
                        to="/contact" 
                        className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                        style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                      >
                        <span className="relative z-10 text-white">Une question ? Contactez-nous →</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-lg p-6 ring-1 ring-slate-200">
                    <ul className="space-y-4">
                      {[
                        'Accessible aux petites organisations',
                        'Contribution adaptée à vos moyens',
                        'Soutien direct au développement',
                        'Accès transmis manuellement sous 48h',
                        'Mises à jour incluses'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                          <span className="text-green-500 text-lg font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-12">
              <h2 className="text-3xl font-bold text-slate-900">
                Prêt à simplifier la gestion de votre club ?
              </h2>
              <p className="mx-auto mt-4 w-full text-slate-600">
                Rejoignez les utilisateurs de ClubManager et centralisez votre organisation.
              </p>
              <div className="mt-8">
                <a 
                  href="https://ko-fi.com/borymaxime"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                  style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="relative z-10 text-white">Commencer maintenant →</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-on-scroll.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </Layout>
  );
}