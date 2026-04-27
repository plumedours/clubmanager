import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Bien démarrer',
      items: [
        'intro',
        'installation',
        'configuration',
      ],
    },
    {
      type: 'category',
      label: 'Membres',
      items: [
        'membres/ajouter-un-membre',
        'membres/cartes-membres',
      ],
    },
    {
      type: 'category',
      label: 'Transactions',
      items: [
        'transactions/gestion-transactions',
      ],
    },
    {
      type: 'category',
      label: 'Présences',
      items: [
        'presences/suivi-presences',
      ],
    },
    {
      type: 'category',
      label: 'Rapports',
      items: [
        'rapports/rapports-pdf',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/depannage',
      ],
    },
  ],
};

export default sidebars;