const path = require("path");
const { generateVPressSidebar } = require("../../vpress-navinator");
const vpressNavigatorPath = path.join(process.cwd(), "vpress-navinator.js");
console.log("TCL: vpressNavigatorPath", vpressNavigatorPath);

module.exports = {
  // extend: "@vuepress/theme-default",

  title: "Nuxt Guide",

  description:
    "Nuxt Guide provides code snippets, solutions to common problems, and a resource for Nuxt.js developers",

  dest: "public",

  // markdown: {
  //   extendMarkdown: md => {
  //     md.set({ breaks: true })
  //     md.use(require('markdown-it-xxx'))
  //   }
  // }
  // markdown: {
  //   plugins: ["markdown-it-admonition"]
  // },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require("markdown-it-admonition"));
    }
  },

  themeConfig: {
    displayAllHeaders: true,
    // smoothScroll: true,
    sidebar: generateVPressSidebar()
  },

  extraWatchFiles: [require.resolve(vpressNavigatorPath)],

  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@public": path.join(__dirname, "./public")
        }
      }
    };
  },

  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        backgroundTransition: false,
        successText: "Copied"
      }
    ],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ]
  ]
};
