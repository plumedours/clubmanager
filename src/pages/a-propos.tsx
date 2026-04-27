import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Navbar from '../components/Navbar';

const infos = [
  { label: 'Version actuelle', value: '1.0.0', icon: '📦' },
  { label: 'Plateforme', value: 'Windows', icon: '💻' },
  { label: 'Type', value: 'Application locale de gestion', icon: '🏠' },
  { label: 'Distribution', value: 'Accès manuel après contribution libre', icon: '🎁' },
  { label: 'Développeur', value: 'Maxime Bory', icon: '👨‍💻' },
];

const values = [
  {
    title: 'Simplicité',
    description: 'Une interface claire et intuitive, sans complexité inutile.',
    icon: '🎯',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Centralisation',
    description: 'Toutes les informations au même endroit pour une meilleure visibilité.',
    icon: '📊',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Accessibilité',
    description: 'Pensé pour les petits clubs avec un prix libre et sans engagement.',
    icon: '🤝',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Transparence',
    description: 'Prix libre, aucune donnée cachée.',
    icon: '🔍',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function APropos(): React.ReactNode {
  const [scrolled, setScrolled] = useState(false);

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
      title="À propos - ClubManager" 
      description="Découvrez l'histoire, la philosophie et les informations techniques de ClubManager, l'application de gestion pour clubs et associations."
    >
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center animate-on-scroll">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Un outil simple pour aider les clubs à{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  mieux s'organiser
                </span>
              </h1>
              <p className="mx-auto mt-6 w-full text-lg text-slate-600 sm:text-xl leading-relaxed">
                ClubManager est né d'un constat simple : les petites organisations manquent d'outils adaptés,
                à la fois puissants et simples à utiliser.
              </p>
            </div>
          </div>
        </section>

        {/* Description principale */}
        <section className="pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="animate-on-scroll">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12 ring-1 ring-blue-100">
                    <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"></div>
                    
                    <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Une application pensée pour vous
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        ClubManager est une application de gestion conçue pour les clubs, associations et petites organisations. 
                        Elle centralise les membres, les transactions, les présences, les rapports et les paramètres dans une interface 
                        simple et accessible.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Le projet a été pensé pour les structures qui veulent un outil concret et professionnel, 
                        sans devoir mettre en place un système lourd, coûteux ou difficile à maintenir.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {['🚀', '💡', '🎯', '⚡'].map((emoji, idx) => (
                        <div key={idx} className="rounded-xl bg-white shadow-md p-4 text-center ring-1 ring-slate-200 transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="text-3xl mb-2">{emoji}</div>
                            <div className="text-sm font-medium text-slate-700">
                            {idx === 0 && 'Innovant'}
                            {idx === 1 && 'Intuitif'}
                            {idx === 2 && 'Efficace'}
                            {idx === 3 && 'Rapide'}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        {/* Valeurs / Points forts */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Nos valeurs
                </span>
              </h2>
              <p className="mx-auto mt-4 w-full text-lg text-slate-600">
                Ce qui rend ClubManager unique et adapté à vos besoins
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="group animate-on-scroll rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`inline-flex rounded-xl bg-gradient-to-r ${value.color} p-2 mb-5 text-xl text-white shadow-lg transition-transform group-hover:scale-110`}>
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informations du projet */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              {/* Philosophie */}
              <div className="animate-on-scroll">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900">Philosophie du projet</h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    ClubManager privilégie l'efficacité, la lisibilité et la simplicité. 
                    L'application doit rester agréable à utiliser au quotidien, même pour des 
                    utilisateurs qui ne sont pas spécialistes en informatique.
                  </p>
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border-l-4 border-blue-500">
                    <p className="text-sm text-slate-600 italic">
                      "La technologie doit servir l'humain, pas l'inverse. ClubManager met la simplicité 
                      au cœur de son design."
                    </p>
                  </div>
                </div>
              </div>

              {/* Infos techniques */}
              <div className="animate-on-scroll animation-delay-200">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Informations du projet
                    </h2>
                    <dl className="mt-6 space-y-4">
                    {infos.map((info, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                        <dt className="flex items-center gap-2 text-slate-600">
                            <span>{info.icon}</span>
                            <span>{info.label}</span>
                        </dt>
                        <dd className="text-right font-semibold text-slate-900">{info.value}</dd>
                        </div>
                    ))}
                    </dl>
                    
                    <div className="mt-8 flex flex-wrap gap-3">

                    <a 
                            href="https://ko-fi.com/borymaxime"
                        target="_blank"
                        rel="noreferrer"
                            className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                            style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            <span className="relative z-10 text-white">Contribuer librement →</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                        </a>
                        <a 
                            href="https://plumedours.github.io/portfolio/"
                        target="_blank"
                        rel="noreferrer"
                            className="inline-block rounded-full border-2 border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:scale-105"
                            style={{ 
                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transformOrigin: 'center'
                            }}
                        >
                            Voir le portfolio →
                        </a>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="pb-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
                <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-12">
                <h2 className="text-3xl font-bold text-slate-900">
                    Soutenez le projet ClubManager
                </h2>
                <p className="mx-auto mt-4 w-full text-slate-600">
                    Votre contribution permet de financer le développement, la documentation et les améliorations futures du logiciel.
                </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link 
                            to="/obtenir-clubmanager" 
                            className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                            style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            <span className="relative z-10 text-white">Obtenir l'application →</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                        </Link>
                        <Link 
                            to="/contact" 
                            className="inline-block rounded-full border-2 border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:scale-105"
                            style={{ 
                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            transformOrigin: 'center'
                            }}
                        >
                            Contacter l'équipe
                        </Link>
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