import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "react",
    prefix: "/JavaScript/",
    children: [
      {
        text: "React",
        icon: "react",
        prefix: "React/",
        children: [
          { text: "React基础", icon: "react", link: "React基础" },
          { text: "ReactRouter", icon: "react", link: "ReactRouter" },
        ],
      },
    ],
  },
  {
    text: "后端",
    icon: "Java",
    prefix: "/category/",
    children: [
      {
        text: "Java",
        icon: "Java",
        prefix: "Java/",
        children: [{ text: "JavaSE", icon: "Java", link: "JavaSE/Java基础" }],
      },
      {
        text: "Nest",
        icon: "Nest",
        prefix: "Nest/",
        children: [{ text: "Nest基础", icon: "Nest", link: "NestJS" }],
      },
    ],
  },
  {
    text: "Electron系列",
    icon: "app",
    link: "/Electron/",
  },
  {
    text: "Vite系列",
    icon: "tool",
    link: "/vite/",
  },
  {
    text: "时间轴",
    icon: "time",
    link: "/timeline/",
  },
]);
