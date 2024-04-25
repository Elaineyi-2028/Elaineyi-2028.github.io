import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    "/DailyRoutine",
    "/Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa-brands fa-readme", link: "https://newzone.top/reading/" },
    //研究笔记
    {
      text: "💡 科研笔记",
      icon: "",
      prefix: "/research/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Foundation",
          icon: "fa-solid fa-cube",
          collapsible: true,
          children: ["HPC.md", "RDMA.md"],
        },
        {
          text: "Paper",
          icon: "fa-solid fa-object-group",
          collapsible: true,
          children: ["paper.md"],
        },
      ],
    },
    // 指定显示页面
    {
      text: "🧰 应用手册",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        "Applist.md",
        "toolbox.md",
        {
          text: "其他",
          icon: "fa-solid fa-code-compare",
          collapsible: true,
          children: ["design.md"],
        },
      ],
    },
    {
      text: "🌐 页面开发",
      icon: "",
      prefix: "/web/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🏗️ 网站部署",
      icon: "",
      prefix: "/deploy/",
      link: "",
      collapsible: true,
      children: [
        "Static.md",
        "CloudServices.md",
        "VPS.md",
        {
          text: "部署工具",
          icon: "fa-brands fa-windows",
          collapsible: true,
          children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
        },
      ],
    },
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "/code/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Basic",
          icon: "fa-solid fa-cube",
          collapsible: true,
          children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
        },
        {
          text: "FrondEnd",
          icon: "fa-solid fa-object-group",
          collapsible: true,
          children: ["Vue.md", "HTML.md", "Javascript.md", "Python.md"],
        },
      ],
    },
    {
      text: "🛖 生活记录",
      icon: "",
      prefix: "/family/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "fa-solid fa-blog",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/apps/topic/": "structure",
});
