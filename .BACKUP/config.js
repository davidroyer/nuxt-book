// .vuepress/config.js
module.exports = {
  title: "Design Process by Netguru", // Page title
  description: "Live E-Book with useful informations about Design Process",
  theme: "live-ebook", // Important! This is the name of this theme
  redirectToFirstSection: false, // Important! Control if `/` should redirect to 1st chapter or not
  base: "/", // Base URL, leave as is if you don't serve the book from a folder
  contactUrl: "/", // Url on which user will be redirected after click on contact
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }]
  ],
  ga: "UA-259047-66", // Google Analytics ID
  themeConfig: {
    bookTitle: "Design Process for pros", // Book title
    baseUrl: "https://design-process.netguru.co", // Used for sharing in social media and for meta tags
    exitUrl: "https://www.netguru.co/design-process",
    company: {
      name: "Netguru",
      url: "https://www.netguru.co",
      logo: "/images/netguru.svg",
      logoMobile: "/images/netguru_letter.svg",
      copyRights: "© 2019 Copyrights by Netguru. All rights reserved."
    },
    socials: {
      facebook: "netguru",
      twitter: "netguru",
      dribbble: "netguru",
      behance: "netguru"
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
