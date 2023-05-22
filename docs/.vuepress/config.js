module.exports = {
  base: "/manage-system-docs/",
  title: "Vue3 System Template",
  description: "基于RuoYi系统二次开发的管理系统模板开发文档",
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  themeConfig: {
    logo: "/assets/img/favicon.ico",
    nav: [
      { text: "文档", link: "/guide/" },
      {
        text: "GitHub",
        link: "https://github.com/zoudingyi/RuoYi-Vue3",
      },
    ],
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: "开始",
        collapsable: false,
        children: [
          ["/guide/", "简介"],
          ["/guide/login/", "登录"],
          ["/guide/component/", "基础组件"],
        ],
      },
      {
        title: "其他",
        collapsable: false,
        children: [],
      },
    ],
  },
};
