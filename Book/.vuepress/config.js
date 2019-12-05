const path = require("path");
const { generateVPressSidebar } = require("../../vpress-navinator");
const vpressNavigatorPath = path.join(process.cwd(), "vpress-navinator.js");
console.log("TCL: vpressNavigatorPath", vpressNavigatorPath);

module.exports = {
  title: "Learning Nuxt.js",
  dest: "public",
  // configureWebpack: {
  //   resolve: {
  //     alias: { "@ns": path.join(__dirname, "../../nuxtstrap") }
  //   }
  // },
  // dest: "./dist",
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
    sidebar: generateVPressSidebar()

    // sidebar: [
    //   {
    //     title: "Chapter 1",
    //     children: [
    //       "/chapter1/01-overview",
    //       "/chapter1/02-creating-applications"
    //     ]
    //   }
    // ]
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
        // selector: String,
        align: "bottom",
        // color: String,
        backgroundTransition: false,
        // backgroundColor: String,
        successText: "Copied"
      }
    ]
  ]
};
