import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-blob/",
  lang: "zh-CN",
  title: "月岛",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
