import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Navbar from '../components/Navbar';

const screenshots = [
  {
    title: 'Tableau de bord',
    image: '/clubmanager/img/screenshots/dashboard.png',
    description: 'Une vue synthèse pour suivre rapidement les données importantes.',
    icon: '📊'
  },
  {
    title: 'Membres',
    image: '/clubmanager/img/screenshots/membres.png',
    description: 'Une gestion claire des fiches membres.',
    icon: '👥'
  },
  {
    title: 'Finances',
    image: '/clubmanager/img/screenshots/finances.png',
    description: 'Un suivi des transactions, cotisations et mouvements financiers.',
    icon: '💰'
  },
  {
    title: 'Présences',
    image: '/clubmanager/img/screenshots/presences.png',
    description: 'Un outil pratique pour enregistrer les passages et présences.',
    icon: '📅'
  },
  {
    title: 'Rapports',
    image: '/clubmanager/img/screenshots/rapports.png',
    description: 'Des exports et rapports professionnels pour vos suivis.',
    icon: '📈'
  }
];

const features = [
  {
    icon: '🎯',
    title: 'Simple à prendre en main',
    description: 'Des écrans clairs pour une utilisation quotidienne sans formation technique.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: '💎',
    title: 'Prix libre',
    description: 'Vous choisissez ce que vous voulez payer, selon vos moyens et votre utilisation.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: '🖥️',
    title: 'Auto-hébergeable',
    description: 'Utilisez votre propre base de données en ligne (Neon, Supabase, PostgreSQL) ou en local (SQLite).',
    color: 'from-green-500 to-green-600'
  }
];

export default function Home(): React.ReactNode {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Animation au scroll
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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = screenshots.map(s => ({
    src: s.image,
    title: s.title,
    description: s.description
  }));

return (
  <Layout 
    title="ClubManager - Gestion pour clubs et associations" 
    description="Application de gestion pour clubs, associations et petites organisations. Gérez vos membres, finances et présences simplement."
  >
    <main className="min-h-screen bg-white">
      {/* Navbar flottante */}
      <Navbar />

      {/* Hero Section améliorée avec plus de présence */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Background decorations */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-100/10 to-cyan-100/10 blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Hero header - Nouvelle section avec titre plus impactant */}
          <div className="text-center mb-12 animate-on-scroll">
                        
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                ClubManager
              </span>
            </h1>
            <h2>
              <span className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                La gestion de club nouvelle génération
              </span>
            </h2>
            
            <p className="mx-auto mt-6 w-full text-lg text-slate-600 sm:text-xl leading-relaxed">
              Centralisez vos membres, finances, présences et rapports dans une interface 
              pensée pour les petites organisations.
            </p>
            
          </div>

          {/* Sous-section avec le contenu original */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mt-16">
            {/* Left content */}
            <div className="animate-on-scroll">
              
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Gérez votre club avec{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  simplicité
                </span>
              </h2>
              <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
                ClubManager centralise les membres, transactions, présences, rapports et paramètres. 
                Une interface moderne pour une gestion sans complexité.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/obtenir-clubmanager" 
                  className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                  style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="relative z-10 text-white">Obtenir l'application →</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                </Link>
                <Link 
                  to="/documentation/intro" 
                  className="inline-block rounded-full border-2 border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:scale-105"
                  style={{ 
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center'
                  }}
                >
                  Documentation
                </Link>
              </div>
            </div>

            {/* Mockup avec animation */}
            <div className="animate-on-scroll animation-delay-200">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-xl transition-all group-hover:opacity-30"></div>
                <div className="relative rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-slate-400">ClubManager - Tableau de bord</span>
                  </div>
                  <img 
                    src="/clubmanager/img/screenshots/dashboard.png" 
                    alt="Aperçu ClubManager" 
                    className="w-full cursor-pointer rounded-b-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    onClick={() => openLightbox(0)}
                  />
                </div>
                
                {/* Badge flottant */}
                <div className="absolute -top-3 -right-3 animate-bounce">
                  <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    ⭐ Prix libre
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Screenshots Gallery */}
        <section className="border-t border-slate-100 bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
    Interface claire et intuitive
  </span>
</h2>
              <p className="mx-auto mt-4 w-full text-base text-slate-600 sm:text-lg">
                Découvrez les principaux écrans de ClubManager
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((screenshot, idx) => (
                <div
                  key={screenshot.title}
                  className="group animate-on-scroll cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                  onClick={() => openLightbox(idx)}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-2.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                      {screenshot.icon}
                    </div>
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{screenshot.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Pourquoi ClubManager
                    </span>
                </h2>
              <p className="mx-auto mt-4 w-full text-base text-slate-600">
                Une application pensée pour les petites organisations
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group animate-on-scroll rounded-2xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`inline-flex rounded-xl bg-gradient-to-r ${feature.color} p-1.5 mb-5 text-2xl text-white shadow-lg transition-transform group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Honnête */}
        <section className="relative overflow-hidden border-slate-100 bg-slate-50 py-20 md:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-on-scroll">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Prix libre
                    </span>
                </h2>
                <p className="mx-auto mt-4 w-full text-base text-slate-600">
                    Pas de licence, pas d'abonnement obligatoire. Vous choisissez ce que vous voulez payer.
                </p>
                </div>

                <div className="mx-auto mt-12 max-w-md animate-on-scroll">
                <div className="relative rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-xl">
                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-1 text-sm font-bold text-white shadow-lg">
                    ⭐ Le plus transparent
                    </div>
                    
                    <div className="text-center mt-4">
                    <div className="text-5xl font-bold text-slate-900">Prix libre</div>
                    <div className="my-2 text-sm text-slate-500">Selon vos moyens et votre utilisation</div>
                    </div>
                    
                    <ul className="mt-8 space-y-4">
                    {[
                        'Toutes les fonctionnalités incluses',
                        'Support (quand disponible)',
                        'Stockage selon votre base de données',
                        'Mises à jour gratuites'
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="text-green-500 text-lg">✓</span>
                        {item}
                        </li>
                    ))}
                    </ul>

                    <div className="my-8 flex flex-wrap gap-4">
                        <Link 
                            to="/obtenir-clubmanager" 
                            className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                            style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            <span className="relative z-10 text-white">Obtenir l'application →</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                        </Link>
                    </div>
                    
                    <p className="mt-4 text-center text-xs text-slate-500">
                    Aucune carte bancaire requise
                    </p>
                </div>
                </div>
            </div>
            </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
          plugins={[Zoom, Captions]}
          zoom={{ maxZoomPixelRatio: 3 }}
          captions={{ descriptionTextAlign: 'center' }}
        />
      </main>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </Layout>
  );
}