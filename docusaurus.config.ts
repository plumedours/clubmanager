import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ClubManager',
  tagline: 'La gestion de votre club, enfin centralisée.',
  favicon: 'img/favicon.ico',
  url: 'https://plumedours.github.io',
  baseUrl: '/clubmanager/',
  organizationName: 'plumedours',
  projectName: 'clubmanager',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  i18n: { defaultLocale: 'fr', locales: ['fr'] },
  plugins: [
    async function tailwindPlugin() {
      return {
        name: 'clubmanager-tailwind-plugin',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [[ 'classic', { docs: { sidebarPath: './sidebars.ts', routeBasePath: 'documentation' }, blog: false, theme: { customCss: './src/css/custom.css' } } satisfies Preset.Options]],
  themeConfig: {
    // Forcer le thème light uniquement
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true, // Désactive le bouton de switch
      respectPrefersColorScheme: false, // Ignore les préférences système
    },
    image: 'img/screenshots/dashboard.png',
    // Dans themeConfig
    navbar: {
      hideOnScroll: false,
      items: [], // Vide
      logo: undefined, // Enlever le logo par défaut
      title: undefined, // Enlever le titre par défaut
    },
    prism: { 
      theme: prismThemes.github, // Forcer le thème light pour le code
      darkTheme: prismThemes.github, // Même thème pour éviter le switch
    },
  } satisfies Preset.ThemeConfig,
};

export default config;