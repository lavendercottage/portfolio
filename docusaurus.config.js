const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  title: 'Lavender Cottage Portfolio',
  tagline: 'A portfolio powered by Docusaurus',
  url: 'https://lavendercottage.github.io',
  baseUrl: isGitHubPages ? '/portfolio/' : '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  organizationName: 'lavendercottage',
  projectName: 'portfolio',
  themeConfig: {
    navbar: {
      title: 'Lavender Cottage',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/docs/intro', label: 'Portfolio', position: 'left' },
        { to: '/docs/about', label: 'About', position: 'left' },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
