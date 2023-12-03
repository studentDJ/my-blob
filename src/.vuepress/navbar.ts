import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "React系列",
    icon: "react",
    link: "/react/",
  },
  {
    text: "Vue系列",
    icon: "vue",
    link: "/vue/",
  },
  {
    text: "Vite系列",
    icon: "tool",
    link: "/vite/",
  },
  {
    text: "杂谈",
    icon: "article",
    link: "/posts/",
  },
  {
    text: "后端",
    icon: "categoryselected",
    link: "/category/",
  },
  {
    text: "时间轴",
    icon: "time",
    link: "/timeline/",
  },
]);
