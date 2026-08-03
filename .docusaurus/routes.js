import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '549'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a53'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f58'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/docs-as-code',
                component: ComponentCreator('/docs/category/docs-as-code', '486'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/documentation-samples',
                component: ComponentCreator('/docs/category/documentation-samples', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/information-design',
                component: ComponentCreator('/docs/category/information-design', '0ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docs-as-code/About Docs-as-code',
                component: ComponentCreator('/docs/Docs-as-code/About Docs-as-code', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docs-as-code/Docusaurus',
                component: ComponentCreator('/docs/Docs-as-code/Docusaurus', 'f90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation samples/design-showcase',
                component: ComponentCreator('/docs/Documentation samples/design-showcase', '8ae'),
                exact: true
              },
              {
                path: '/docs/Documentation samples/installationguide',
                component: ComponentCreator('/docs/Documentation samples/installationguide', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation samples/userguide',
                component: ComponentCreator('/docs/Documentation samples/userguide', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Documentation samples/web-portfolio',
                component: ComponentCreator('/docs/Documentation samples/web-portfolio', '73b'),
                exact: true
              },
              {
                path: '/docs/Information design/Navigation',
                component: ComponentCreator('/docs/Information design/Navigation', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Information design/Taxonomi',
                component: ComponentCreator('/docs/Information design/Taxonomi', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
