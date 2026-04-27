import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Navbar from '../components/Navbar';

const faqItems = [
  {
    question: "Comment obtenir ClubManager ?",
    answer: "ClubManager est accessible via une contribution libre. Rendez-vous sur la page 'Prix libre', choisissez votre contribution sur Ko-fi, puis contactez-moi via le formulaire ou par email pour recevoir les instructions d'installation et d'accès."
  },
  {
    question: "Quel est le prix du logiciel ?",
    answer: "ClubManager fonctionne avec un modèle de 'prix libre'. Vous choisissez le montant que vous souhaitez contribuer, selon vos moyens et l'utilisation que vous faites du logiciel. Il n'y a pas d'abonnement obligatoire."
  },
  {
    question: "Quels sont les prérequis techniques ?",
    answer: "ClubManager fonctionne sur Windows. Vous aurez besoin d'une base de données PostgreSQL (Neon, Supabase ou installation locale) et d'une connexion internet pour l'installation initiale. Une fois installé, le logiciel fonctionne localement. Vous pouvez également utiliser l'option SQLite et vous n'aurez pas besoin de connexion internet."
  },
  {
    question: "Le support est-il inclus ?",
    answer: "Le support est assuré quand je suis disponible. N'hésitez pas à poser vos questions par email ou via le formulaire de contact. Je m'efforce de répondre dans les meilleurs délais (généralement sous 48h)."
  },
  {
    question: "Puis-je obtenir une facture ?",
    answer: "En tant que développeur amateur, je ne suis pas en mesure de fournir de facture formelle avec numéro de TVA/TPS. Cependant, la plateforme Ko-fi vous fournit un reçu ou un email de confirmation après votre contribution, qui sert de justificatif de paiement. Vous pouvez également me contacter pour recevoir une attestation de contribution personnalisée."
  },
  {
    question: "ClubManager est-il conforme au RGPD ?",
    answer: "ClubManager fonctionne comme une application locale. Aucune donnée personnelle n'est collectée sur le site. Les données que vous saisissez dans l'application sont stockées sur votre propre base de données (Neon, Supabase ou locale). Le développeur n'a pas accès à vos données."
  },
  {
    question: "Le logiciel est-il open source ?",
    answer: "Non, ClubManager n'est pas open source. Le code source n'est pas public. Le logiciel est distribué sous le modèle du prix libre, ce qui signifie que vous contribuez financièrement selon vos moyens pour y accéder."
  },
  {
    question: "Puis-je installer ClubManager sur plusieurs ordinateurs ?",
    answer: "Oui, vous pouvez installer ClubManager sur plusieurs ordinateurs de votre organisation. L'accès est personnel et destiné à votre club ou association."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Les contributions sont acceptées via Ko-fi (carte bancaire, PayPal). Une fois la contribution effectuée, vous pouvez me contacter pour recevoir l'accès au logiciel."
  },
  {
    question: "Comment signaler un bug ou proposer une amélioration ?",
    answer: "Vous pouvez me contacter par email ou via le formulaire de contact. Je prends en compte les retours pour améliorer ClubManager lors des prochaines mises à jour."
  },
  {
    question: "Y a-t-il des mises à jour ?",
    answer: "Oui, les mises à jour sont incluses. Je les envoie aux utilisateurs enregistrés. Les mises à jour sont gratuites pour les contributeurs."
  }
];

export default function FAQ(): React.ReactNode {
  const [scrolled, setScrolled] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Layout 
      title="FAQ - ClubManager" 
      description="Foire aux questions sur ClubManager - Réponses aux questions fréquentes sur l'installation, le prix, le support et plus encore."
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
                Foire aux{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  questions
                </span>
              </h1>
              <p className="mx-auto mt-6 w-full text-lg text-slate-600 sm:text-xl leading-relaxed">
                Tout ce que vous devez savoir sur ClubManager
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openItems.includes(idx);
                return (
                  <div
                    key={idx}
                    className="animate-on-scroll rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all hover:shadow-lg"
                    style={{ animationDelay: `${idx * 0.02}s` }}
                  >
                    <button
                      onClick={() => toggleItem(idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between group"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 pr-4">
                        {item.question}
                      </h3>
                      <span className={`text-2xl text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section contact si question non trouvée */}
            <div className="mt-12 text-center animate-on-scroll">
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Vous n'avez pas trouvé votre réponse ?
                </h3>
                <p className="mt-2 text-slate-600">
                  N'hésitez pas à me contacter directement, je vous répondrai dans les meilleurs délais.
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
          </div>
        </section>
      </main>

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
    </Layout>
  );
}