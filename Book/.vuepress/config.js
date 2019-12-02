const path = require("path");
const { generateVPressSidebar } = require("../../vpress-navinator");

module.exports = {
  title: "Learning Nuxt.js",
  dest: "public",
  // configureWebpack: {
  //   resolve: {
  //     alias: { "@ns": path.join(__dirname, "../../nuxtstrap") }
  //   }
  // },
  // dest: "./dist",
  themeConfig: {
    displayAllHeaders: true,
    // Multiple Sidebars
    // sidebar: {
    //   "/chapter1/": [
    //     "" /* /foo/ */,
    //     "01-overview" /* /foo/one.html */,
    //     "02-creating-applications" /* /foo/one.html */
    //   ],
    //   "/chapter2/": [
    //     "" /* /foo/ */,
    //     "01-section1" /* /foo/one.html */,
    //     "02-section2" /* /foo/one.html */
    //   ],
    //   // fallback
    //   "/": ["" /* / */]
    // }
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
