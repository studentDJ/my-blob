import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端",
      icon: "react",
      prefix: "JavaScript/",
      // children: "structure",
      children: [
        {
          text: "React",
          children: ["React/React基础", "React/ReactRouter"],
        },
        {
          text: "其他",
          children: ["other/"],
        },
      ],
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
  ],
});
