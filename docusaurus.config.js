const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");
const adsense = require("./src/plugin/remark-adsense");

module.exports = {
    title: "PommesPeter's Blog",
    // tagline:
    //   "帮助你提升前端开发技能，分享 HTML、CSS、JavaScript、React 和 Vue 等开发实战经验",
    titleDelimiter: "|",
    url: "https://memo.pommespeter.space",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "PommesPeter", // Usually your GitHub org/user name.
    projectName: "pommespeter.space", // Usually your repo name.
    themeConfig: {
        image: "img/pommespeter-logo.png",
        // announcementBar: {
        //     id: "feature_release", // Any value that will identify this message.
        //     content: `更新<a href='/docs/videos/browser/js-web-animations-api'>《与 CSS Keyframes 媲美的原生 JS 高性能动画 API 教程》配套文本</a>`,
        //     backgroundColor: "#fafbfc", // Defaults to `#fff`.
        //     textColor: "#091E42", // Defaults to `#000`.
        // },
        hideableSidebar: true,
        navbar: {
            title: "PommesPeter",
            logo: {
                alt: "PommesPeter",
                src: "img/logo.png",
                srcDark: "img/logo.png",
            },
            items: [
                // {
                //   type: "localeDropdown",
                //   position: "left",
                // },
                {
                    to: "/",
                    label: "Home",
                    position: "right",
                },
                {
                    to: "blog",
                    label: "Blog",
                    position: "right",
                },
                {
                    label: "DeepLearning",
                    position: "right",
                },
                {
                    label: "Algorithm",
                    position: "right",
                },
                {
                    label: "Course",
                    position: "right",
                    to: "docs/course/",
                },
                {
                    label: "About",
                    position: "right",
                    items: [{
                            label: "Links",
                            to: "docs/about",
                        },
                        {
                            label: "Archive",
                            to: "docs/archive",
                        }, {
                            href: "https://github.com/PommesPeter",
                            label: "My Github",
                            position: "right",
                        }
                    ]
                },
            ],
        },
        algolia: {
            apiKey: "fabfb0e9997e101154ed85d64b7b6a3c",
            indexName: "ZXUQIANCN",
            appId: "LIJMO3C9C4",
        },
        footer: {
            style: "dark",
            links: [{
                    title: "Docs",
                    items: [{
                            label: "React 即时通信 UI 开发实战",
                            to: "docs/course/react-chat-ui",
                        },
                        {
                            label: "技术视频",
                            to: "docs/videos",
                        },
                        {
                            label: "CSS 完全指南",
                            to: "docs/css/css-tutorial-intro",
                        },
                        {
                            label: "资源导航",
                            to: "docs/resources",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [{
                            label: "Neet CV",
                            href: "https://github.com/neet-cv",
                        },
                        {
                            label: "GUET CS Technical Association",
                            href: "https://github.com/PommesPeter",
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
                    title: "Links",
                    items: [{
                            label: "DeepLearning NoteBook",
                            to: "https://ml.akasaki.space/",
                        },
                        {
                            label: "My Github",
                            to: "https://github.com/PommesPeter",
                        },
                        {
                            label: "About me",
                            to: "docs/about",
                        },
                    ],
                },
            ],
            copyright: `<p>Copyright © ${new Date().getFullYear()} PommesPeter Built with Docusaurus.`,
        },
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/oceanicNext"),
            defaultLanguage: "javascript",
        },
        // googleAnalytics: {
        //   trackingID: "UA-118572241-1",
        //   anonymizeIP: true, // Should IPs be anonymized?
        // },
        gtag: {
            trackingID: "G-6PSESJX0BM",
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master",
                    remarkPlugins: [math, adsense],
                    rehypePlugins: [katex],
                    showLastUpdateTime: true,
                },
                blog: {
                    path: "./blog",
                    routeBasePath: "/",
                    blogSidebarTitle: "近期文章",
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    feedOptions: {
                        type: "all",
                        title: "life as a programmer, developer, and developer",
                        copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">冀ICP备14007097号-3</a></p>`,
                    },
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    changefreq: "daily",
                    priority: 0.5,
                },
            },
        ],
    ],
    // themes: ["@docusaurus/theme-live-codeblock"],
    plugins: [
        path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
        path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
        // "@docusaurus/plugin-ideal-image",
        path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
        path.resolve(__dirname, "./src/plugin/plugin-onesignal-push"),
        path.resolve(__dirname, "./src/plugin/plugin-latest-docs"),
        "docusaurus2-dotenv", [
            "@docusaurus/plugin-content-blog",
            {
                id: "secret-garden",
                routeBasePath: "lifestyle",
                path: "./lifestyle",
                feedOptions: {
                    type: "all",
                    title: "",
                    copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" >冀ICP备14007097号-3</a></p>`,
                },
            },
        ],
        // [
        //   "@easyops-cn/docusaurus-search-local",
        //   {
        //     hashed: true,
        //     // indexPages: true,
        //     blogRouteBasePath: "/",
        //     language: ["en", "zh"],
        //   },
        // ],
    ],
    stylesheets: [{
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            type: "text/css",
        },
        {
            href: "/katex/katex.min.css",
            type: "text/css",
            integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
            crossorigin: "anonymous",
        },
        {
            href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
            type: "text/css",
            rel: "stylesheet",
        },
    ],
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN"],
        // locales: ["zh-CN", "en"],
        // localeConfigs: {
        //   "zh-CN": {
        //     label: "中文",
        //   },
        //   en: {
        //     label: "English",
        //   },
        // },
    },
};