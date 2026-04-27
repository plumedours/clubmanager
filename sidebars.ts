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
        'navigation',
        'desinstallation',
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
        'transactions/categories-financiere',
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
      label: 'Paramètres',
      items: [
        'parametres/index',
        'parametres/club',
        'parametres/email',
        'parametres/application',
        'parametres/punch',
        'parametres/maintenance',
        'parametres/securite',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/a-propos',
        'support/depannage',
      ],
    },
  ],
};

export default sidebars;