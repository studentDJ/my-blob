## 1.创建一个worker文件

```js
// src/workers/mainWorker.js

self.onmessage = (e) => {
    const { message } = e.data;
    console.log('Received message in worker:', message);

    // 处理数据
    const result = processData(message);

    // 将结果发送回主线程
    self.postMessage({ result });
};

function processData(data) {
    // 模拟数据处理
    return data + ' - processed';
}
```

## 2.在Vue组件中使用worker

```vue
<template>
<div>
    <button @click="sendMessageToWorker">Send Message to Worker</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const worker = ref(null);
    const message = ref('Hello Worker');

    // 创建并初始化worker
    worker.value = new Worker(new URL('@/workers/mainWorker.js', import.meta.url));

    // 发送消息到worker
    function sendMessageToWorker() {
        worker.value.postMessage({ message: message.value });
        worker.value.onmessage = (e) => {
            console.log('Received message from worker:', e.data.result);
        };
    }
</script>
```

## 3.确保在Vite配置中正确处理worker文件

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            output: {
                // 确保worker文件被正确打包
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.worker.js')) {
                        return assetInfo.name;
                    }
                    return `${assetInfo.name}.${assetInfo.ext}`;
                },
            },
        },
    },
})
```

