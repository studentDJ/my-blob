import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端",
      icon: "react",
      prefix: "JavaScript/",
      children: "structure",
    },
    {
      text: "Electron系列",
      icon: "react",
      prefix: "Electron/",
      children: "structure",
    },
    {
      text: "后端",
      icon: "Java",
      prefix: "category/",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "study",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
