import React from 'react';

const features = [
  ['👥', 'Membres centralisés', 'Gardez les informations de vos membres, statuts, coordonnées et historiques au même endroit.'],
  ['💳', 'Finances et transactions', 'Suivez les cotisations, revenus, dépenses et mouvements financiers avec une lecture claire.'],
  ['✅', 'Présences et passages', 'Enregistrez les présences, les visites ou les pointages selon votre fonctionnement.'],
  ['📄', 'Rapports professionnels', 'Générez des rapports PDF propres pour l’administration, les suivis et les bilans.'],
  ['⚙️', 'Paramètres personnalisables', 'Adaptez le nom du club, le logo, les coordonnées et les préférences à votre réalité.'],
  ['📚', 'Documentation claire', 'Un manuel web accompagne l’application pour faciliter l’installation et la prise en main.'],
];

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section id="fonctionnalites" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">Fonctionnalités</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Les outils essentiels pour gérer votre organisation</h2>
        <p className="mt-4 text-lg text-slate-600">ClubManager rassemble les fonctions importantes dans une interface cohérente, sans surcharge inutile.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(([icon, title, description]) => (
          <article key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl ring-1 ring-blue-100">{icon}</div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
