// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PommesPeter's Memo",
  tagline: 'Dinosaurs are cool',
  url: 'https://memo.pommespeter.space',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PommesPeter', // Usually your GitHub org/user name.
  projectName: 'memo.pommespeter.space', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PommesPeter/memo.pommespeter.space',
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PommesPeter/memo.pommespeter.space',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: "PommesPeter's Memo",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          // {
          //   to: '/docs/intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            to: '/docs/tags',
            label: 'Tags',
            position: 'left',
          },
          {
            to: '/docs/DeepLearning/科研方法/如何读论文',
            activeBasePath: '/docs/DeepLearning',
            label: 'DeepLearning',
            position: 'left'
          },
          {
            to: '/docs/Courses/面向对象程序设计/类-继承-多态',
            activeBasePath: '/docs/Courses',
            label: 'Courses',
            position: 'left'
          },
          {
            to: '/docs/Algorithm/Acwing算法基础课/BasicAlgorithm',
            activeBasePath: '/docs/Algorithm',
            label: 'Algorithm',
            position: 'left'
          },
          {
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'Archive',
                to: '/blog/archive',
              },
              {
                label: 'Links',
                to: '/blog/links',
              },
              {
                href: 'https://github.com/PommesPeter',
                label: 'GitHub',
              }
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} Pommespeter. Built with <a href='https://github.com/facebook/Docusaurus'>Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'AJZBN8BFEV',
        // Public API key: it is safe to commit it
        apiKey: 'fb888f5f56d5285cd5121df9393ab3c7',
        indexName: 'pommespeter',
      }
    }),
};

module.exports = config;
