module.exports = {
  title: "UABIT CSS/JS Library",
  dest: "docs",
  base: "/linear/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/UAB-IT/linear" },
    ],
    sidebar: [
      "/",
      {
        title: "Principals",
        collapsable: false,
        children: [
          "/principals/organization",
          "/principals/typography",
          "/principals/color",
          "/principals/space",
          "/principals/inclusive-design"
        ],
      },
      {
        title: "Components",
        collapsable: false,
        children: [
          "/components/blockquotes",
          "/components/buttons",
          "/components/callouts",
          "/components/comparison-table",
          "/components/google-sheets",
          "/components/grid",
          "/components/images",
          "/components/section",
          "/components/tables",
          "/components/table-of-contents",
          "/components/video"
        ],
      },
      {
        title: "Widgetkit",
        collapsable: false,
        children: [
          "/widgetkit/details",
          "/widgetkit/features",
          "/widgetkit/gallery",
          "/widgetkit/hero",
          "/widgetkit/numbers",
          "/widgetkit/panels",
          "/widgetkit/timeline"
        ],
      },
      {
        title: "Joomla",
        collapsable: false,
        children: [
          "/joomla/areas",
          "/joomla/articles",
          "/joomla/banners",
          "/joomla/menus"
        ],
      },
    ],
  },
};
