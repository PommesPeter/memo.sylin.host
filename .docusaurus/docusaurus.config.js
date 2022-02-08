export default {
  "title": "PommesPeter's Blog",
  "titleDelimiter": "|",
  "url": "https://memo.pommespeter.space",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "PommesPeter",
  "projectName": "pommespeter.space",
  "themeConfig": {
    "image": "img/pommespeter-logo.png",
    "hideableSidebar": true,
    "navbar": {
      "title": "峰华",
      "logo": {
        "alt": "PommesPeter",
        "src": "img/logo.png",
        "srcDark": "img/logo.png"
      },
      "items": [
        {
          "to": "/",
          "label": "Home",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "label": "DeepLearning",
          "position": "right"
        },
        {
          "label": "Algorithm",
          "position": "right"
        },
        {
          "label": "Course",
          "position": "right",
          "to": "docs/course/"
        },
        {
          "label": "About",
          "position": "right",
          "items": [
            {
              "label": "Links",
              "to": "docs/about"
            },
            {
              "label": "Archive",
              "to": "docs/archive"
            },
            {
              "href": "https://github.com/PommesPeter",
              "label": "My Github",
              "position": "right"
            }
          ]
        }
      ],
      "hideOnScroll": false
    },
    "algolia": {
      "apiKey": "fabfb0e9997e101154ed85d64b7b6a3c",
      "indexName": "ZXUQIANCN",
      "appId": "LIJMO3C9C4",
      "contextualSearch": false,
      "searchParameters": {}
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "React 即时通信 UI 开发实战",
              "to": "docs/course/react-chat-ui"
            },
            {
              "label": "技术视频",
              "to": "docs/videos"
            },
            {
              "label": "CSS 完全指南",
              "to": "docs/css/css-tutorial-intro"
            },
            {
              "label": "资源导航",
              "to": "docs/resources"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Neet CV",
              "href": "https://github.com/neet-cv"
            },
            {
              "label": "GUET CS Technical Association",
              "href": "https://github.com/PommesPeter"
            },
            {
              "label": "CSDN Blog",
              "href": "https://blog.csdn.net/weixin_45709330"
            },
            {
              "label": "Email",
              "href": "matilto://me@pommespeter.space"
            }
          ]
        },
        {
          "title": "Links",
          "items": [
            {
              "label": "DeepLearning NoteBook",
              "to": "https://ml.akasaki.space/"
            },
            {
              "label": "My Github",
              "to": "https://github.com/PommesPeter"
            },
            {
              "label": "About me",
              "to": "docs/about"
            }
          ]
        }
      ],
      "copyright": "<p>Copyright © 2022 PommesPeter Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "backgroundColor": "#282c34",
          "color": "#ffffff"
        },
        "styles": [
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "#c5a5c5"
            }
          },
          {
            "types": [
              "attr-value"
            ],
            "style": {
              "color": "#8dc891"
            }
          },
          {
            "types": [
              "comment",
              "block-comment",
              "prolog",
              "doctype",
              "cdata",
              "shebang"
            ],
            "style": {
              "color": "#999999"
            }
          },
          {
            "types": [
              "property",
              "number",
              "function-name",
              "constant",
              "symbol",
              "deleted"
            ],
            "style": {
              "color": "#5a9bcf"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "#ff8b50"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "#fc929e"
            }
          },
          {
            "types": [
              "string"
            ],
            "style": {
              "color": "#8dc891"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "#8dc891"
            }
          },
          {
            "types": [
              "selector",
              "char",
              "builtin",
              "inserted"
            ],
            "style": {
              "color": "#D8DEE9"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "#79b6f2"
            }
          },
          {
            "types": [
              "operator",
              "entity",
              "url",
              "variable"
            ],
            "style": {
              "color": "#d7deea"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "color": "#c5a5c5"
            }
          },
          {
            "types": [
              "at-rule",
              "class-name"
            ],
            "style": {
              "color": "#FAC863"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "fontWeight": "400"
            }
          },
          {
            "types": [
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          }
        ]
      },
      "defaultLanguage": "javascript",
      "additionalLanguages": []
    },
    "gtag": {
      "trackingID": "G-6PSESJX0BM",
      "anonymizeIP": true
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\sidebars.js",
          "editUrl": "https://github.com/zxuqian/zxuqian.cn/tree/master",
          "remarkPlugins": [
            null,
            null
          ],
          "rehypePlugins": [
            null
          ],
          "showLastUpdateTime": true
        },
        "blog": {
          "path": "./blog",
          "routeBasePath": "/",
          "blogSidebarTitle": "近期文章",
          "remarkPlugins": [
            null
          ],
          "rehypePlugins": [
            null
          ],
          "feedOptions": {
            "type": "all",
            "title": "life as a programmer, developer, and developer",
            "copyright": "Copyright © 2022 峰华 (张旭乾) Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\" class=\"footer_lin\">冀ICP备14007097号-3</a></p>"
          }
        },
        "theme": {
          "customCss": "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\src\\css\\custom.css"
        },
        "sitemap": {
          "changefreq": "daily",
          "priority": 0.5
        }
      }
    ]
  ],
  "plugins": [
    "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\src\\plugin\\plugin-baidu-analytics",
    "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\src\\plugin\\plugin-baidu-push",
    "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\src\\plugin\\plugin-google-adsense",
    "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\src\\plugin\\plugin-onesignal-push",
    "E:\\workspace\\MemoLibrary\\memo.pommespeter.space\\src\\plugin\\plugin-latest-docs",
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        "id": "secret-garden",
        "routeBasePath": "lifestyle",
        "path": "./lifestyle",
        "feedOptions": {
          "type": "all",
          "title": "",
          "copyright": "Copyright © 2022 峰华 (张旭乾) Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\" >冀ICP备14007097号-3</a></p>"
        }
      }
    ]
  ],
  "stylesheets": [
    {
      "rel": "preconnect",
      "href": "https://fonts.gstatic.com",
      "type": "text/css"
    },
    {
      "href": "/katex/katex.min.css",
      "type": "text/css",
      "integrity": "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      "crossorigin": "anonymous"
    },
    {
      "href": "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      "type": "text/css",
      "rel": "stylesheet"
    }
  ],
  "i18n": {
    "defaultLocale": "zh-CN",
    "locales": [
      "zh-CN"
    ],
    "localeConfigs": {}
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "noIndex": false
};