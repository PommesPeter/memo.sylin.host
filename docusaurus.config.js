// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PommesPeter's Memo",
  tagline: 'Life as CVer, developer, and developer',
  url: 'https://memo.pommespeter.space',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bitbug_favicon.ico',
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
          editUrl: 'https://github.com/PommesPeter/memo.pommespeter.space/edit/master',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PommesPeter/memo.pommespeter.space/edit/master',
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
      strict: false
    },
  ],
  themes: [
    '@docusaurus/theme-live-codeblock'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: "PommesPeter's Memo",
        logo: {
          alt: 'My Site Logo',
          src: 'img/pommespeter-favicon-32x32.png',
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
            to: '/docs/DeepLearning/DLThings/StanfordCourses/CS231N计算机视觉/knn与线性分类器',
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
            to: '/docs/Algorithm/Acwing/算法基础课/BasicAlgorithm',
            activeBasePath: '/docs/Algorithm',
            label: 'Algorithm',
            position: 'left'
          },
          {
            to: '/docs/DeepLearning/PaperReading/场景图生成/Resistance-Training-using-Prior-Bias-toward-Unbiase-Scene-Graph-Generation.md"',
            activeBasePath: '/docs/PaperReading',
            label: 'PaperLogs',
            position: 'left'
          },
          {
            to: '/about',
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'Archive',
                to: '/blog/archive',
              },
              {
                label: 'Links',
                to: '/links',
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
                label: 'Courses Notes',
                to: '/docs/Courses/面向对象程序设计/类-继承-多态',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Neet CV",
                href: "https://github.com/neet-cv",
              },
              {
                label: "GUET CS Technical Association",
                href: "https://github.com/sanyuankexie",
              },
              {
                label: "CSDN Blog",
                href: "https://blog.csdn.net/weixin_45709330",
              },
              {
                label: "Email",
                href: "matilto://me@pommespeter.space",
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'DeepLearning NoteBook',
                to: 'https://ml.akasaki.space/',
              },
              {
                label: 'Blog Repo',
                href: 'https://github.com/PommesPeter/memo.pommespeter.space',
              },
              {
                label: "About me",
                to: "/about",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} PommesPeter. Built with <a href='https://github.com/facebook/Docusaurus'>Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml', 'yaml', 'ruby', 'rust', 'latex', 'less', 'csv', 'go', 'docker', 'lua', 'r', 'powershell', 'java', 'php', 'python', 'javascript', 'bash', 'sql', 'css', 'scss', 'typescript', 'json', 'yaml', 'markdown', 'matlab'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'AJZBN8BFEV',
        // Public API key: it is safe to commit it
        apiKey: 'fb888f5f56d5285cd5121df9393ab3c7',
        indexName: 'pommespeter',
      },
      i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN"],
      },
    }),
};

module.exports = config;
