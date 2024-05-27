import { fileURLToPath, URL } from 'url'

import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(String (mode), process.cwd()) }

  return defineConfig({
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === 'toast',
          },
        },
      }),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',
      port: process.env.VITE_VUE_APP_SERVER_PORT,
    },
    IP_ADDRESS: process.env.VITE_VUE_APP_IP_ADDRESS,

    build: {
      chunkSizeWarningLimit: 1600,
    },
  })
}
