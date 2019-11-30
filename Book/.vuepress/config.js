const { generateVPressSidebar } = require("../../vpress-navinator");
// console.log(generateVPressSidebar());

module.exports = {
  title: "Nuxt.js Guide",
  // dest: "./dist",
  themeConfig: {
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
  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        // selector: String,
        align: "bottom",
        // color: String,
        backgroundTransition: false
        // backgroundColor: String,
        // successText: String
      }
    ]
  ]
};
