---
icon: pen-to-square
date: 2023-02-10
category:
  - 客户端
tag:
  - Electron
  - Vue3
  - TypeScript
  - Vite
star: true
---

# Electron 项目

## 基于 Electron 和 Vue3 的桌面端应用开发

> 1.2 官网网址:https://evite.netlify.app/
>
> 1.3 安装步骤 npx degit alex8088/electron-vite-boilerplate electron-appcd electron-app

> npm install
>
> npm run dev

- vue 版本:vue3
- 构建工具:vite
- 框架类型:Electron
- JS 语法:TypeScript

```
用户名和密码
admin
abc123456
```

### 路由二次封装

> 疑问:为什么路由二次封装?
>
> 解答:router 文件中在写项目中包含:路由表、导航守卫等等内容，假设路由表特别多 或 导航守卫内容特别多
>
> 代码则很难维护和阅读，所以二次封装路由是为了方便后期维护和管理。

### pinia 和持久化存储

**下载安装**

```node
pnpm i vue-router -S
```

**main.ts 引入**

```ts
import { createPinia } from "pinia";
app.use(createPinia());
```

**index.ts**

```ts
import { defineStore } from "pinia";

export const usestore = defineStore("storeId", {
  state: () => {
    return {
      counter: 0,
    };
  },
  getters: {},
  actions: {},
});
```

**3.4 Vuex 术 IPinia 的 x 别**

> Vuex 和 pinia 的区别有很多，例如:pinia 没有 mutations 和 modules，那么 vuex 的 modules 是为了区分和管理
>
> 小 store 模块的内容，但是 pinia 没有 modules 所以无法直接管理，但是为了项目可能 store 比较多，为了更好
>
> 的管理 store 可以模拟实现来完成。

**拆分 store**

```ts
// useUserStore
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "张三",
    };
  },
  getters: {},
  actions: {},
});

// index.ts
import { defineStore } from "pinia";
import { useUserStore } from "./useUserStore";
export const usestore = defineStore("storeId", {
  state: () => {
    return {
      user: useUserStore(), // 用户
    };
  },
});
```

**持久化存储**

```node
pnpm install pinia-plugin-persist
```

**main.ts**

```ts
// 引入pinia且持久化存储
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
const store = createPinia();
store.use(piniaPluginPersist);
```

**useUserStore**

```ts
persist: {
    enabled: true, // 开始数据缓存
        strategies: [
            {
                storage: localStorage // 缓存位置,默认走session
                // paths: ['name'] // 需要缓存的属性
            }
        ]
}
```

### 路径别名

配置文件：electron.vite.config.ts

```ts
'@renderer': resolve('src/renderer/src'),
'@store': resolve('src/renderer/src/store'),
'@views': resolve('src/renderer/src/views'),
'@router': resolve('src/renderer/src/router'),
'@components': resolve('src/renderer/src/components'),
'@utils': resolve('src/renderer/src/utils'),
'@api': resolve('src/renderer/src/api')
```

### **渲染进程向主进程通信**

```ts
渲染进程:
electron.ipcRenderer.invoke('名称')
主进程:
import { app,shell,BrowserWindow,ipcMain } from 'electron'
ipcMain.handle('名称',(event,渲染进程向主进程传递的参数)=>{

}))
```
