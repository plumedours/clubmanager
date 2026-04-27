import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Navbar from '../components/Navbar';

const contactMethods = [
  {
    title: 'Formulaire de contact',
    description: 'Option recommandée pour une demande structurée et sans spam.',
    icon: '📝',
    href: 'https://forms.gle/3EGhFqtcWFD8rTiNA',
    color: 'from-slate-100 to-slate-50',
    textColor: 'text-slate-800',
    bgHover: 'hover:bg-slate-700',
    external: true
  },
  {
    title: 'Envoyer un courriel',
    description: 'Contact direct, idéal pour les questions rapides.',
    icon: '📧',
    href: 'mailto:borymaxime@gmail.com?subject=ClubManager%20-%20Demande%20d%27information',
    color: 'from-slate-100 to-slate-50',
    textColor: 'text-slate-800',
    bgHover: 'hover:bg-slate-700',
    external: true
  }
];

const faqs = [
  {
    question: 'Comment obtenir l\'application ?',
    answer: 'Après une contribution libre via Ko-fi, vous pouvez me contacter via le formulaire ou par email pour recevoir les instructions d\'installation et d\'accès.'
  },
  {
    question: 'Quels sont les prérequis techniques ?',
    answer: 'ClubManager fonctionne sur Windows. Vous aurez besoin d\'une base de données SQLite (Local, par défaut) ou PostgreSQL (Neon, Supabase ou locale) et d\'une connexion internet pour l\'installation.'
  },
  {
    question: 'Le support est-il inclus ?',
    answer: 'Le support est assuré quand je suis disponible. N\'hésitez pas à poser vos questions par email ou via le formulaire de contact et je vous répondrai dans les meilleurs délais.'
  }
];

export default function Contact(): React.ReactNode {
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
      title="Contact - ClubManager" 
      description="Contactez le développeur de ClubManager pour toute question, demande d'accès ou suggestion d'amélioration."
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
                Une question sur{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  ClubManager
                </span>
                ?
              </h1>
              <p className="mx-auto mt-6 w-full text-lg text-slate-600 sm:text-xl leading-relaxed">
                Pour obtenir le logiciel, demander de l'aide ou proposer une amélioration, 
                plusieurs moyens sont à votre disposition.
              </p>
            </div>
          </div>
        </section>

        {/* Méthodes de contact */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Comment me contacter ?
                </span>
              </h2>
              <p className="mx-auto mt-4 w-full text-lg text-slate-600">
                Choisissez le moyen qui vous convient le mieux
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group animate-on-scroll rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                    method.border 
                      ? `bg-gradient-to-r ${method.color} ring-1 ring-slate-200 ${method.bgHover}`
                      : `bg-gradient-to-r ${method.color} ${method.bgHover}`
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-4xl transition-transform ${method.textColor === 'text-white' ? 'text-white' : 'text-slate-600'}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${method.textColor}`}>{method.title}</h3>
                      <p className={`mt-2 ${method.textColor === 'text-white' ? 'text-blue-50' : 'text-slate-600'}`}>
                        {method.description}
                      </p>
                    </div>
                    <div className={`text-2xl transition-transform group-hover:translate-x-1 ${method.textColor === 'text-white' ? 'text-white/70' : 'text-slate-400'}`}>
                      →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Questions fréquentes
                </span>
              </h2>
              <p className="mx-auto mt-4 w-full text-lg text-slate-600">
                Tout ce que vous devez savoir avant de me contacter
              </p>
            </div>

            <div className="mt-16 space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="animate-on-scroll rounded-xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-12">
              <h2 className="text-3xl font-bold text-slate-900">
                Prêt à franchir le pas ?
              </h2>
              <p className="mx-auto mt-4 w-full text-slate-600">
                Je réponds généralement sous 48h. N'hésitez pas à me contacter !
              </p>
              <div className="mt-8 flex justify-center flex-wrap gap-4">
                <a
                  href="https://forms.gle/3EGhFqtcWFD8rTiNA"
                  target="_blank"
                  rel="noreferrer"
                className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:scale-105 hover:shadow-xl"
                style={{ transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                <span className="relative z-10 text-white">Utiliser le formulaire →</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0"></div>
                </a>
                <a
                  href="mailto:borymaxime@gmail.com?subject=ClubManager%20-%20Demande%20d'information"
                className="inline-block rounded-full border-2 border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:scale-105"
                style={{ 
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center'
                }}
                >
                Envoyer un email
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