// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("regenerator-runtime/runtime");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'lens-ui docs',
  url: 'https://luciancaetano.github.io/lens-ui/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'luciancaetano', // Usually your GitHub org/user name.
  projectName: 'lens-ui', // Usually your repo name.
  deploymentBranch: 'https://github.com/luciancaetano/lens-ui',
  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./node_modules/lens-ui/dist/index.css'), require.resolve('./src/styles.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lens UI',
      },
    }),
};

module.exports = config;
