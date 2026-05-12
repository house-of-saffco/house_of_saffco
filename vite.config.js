import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// Local API:
// - Recommended: `npx vercel dev` — Vercel sets PORT; Vite binds to it; `/api/*` is served on the same origin (no proxy).
// - Optional two-terminal: `npx vercel dev -l 3000` in one shell, and in `.env.local` set
//   CONTACT_API_PROXY_TARGET=http://127.0.0.1:3000 then `npm run dev` — Vite proxies `/api` to that URL.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const vercelPort = env.PORT ? Number(env.PORT) : undefined
  const proxyTarget = (env.CONTACT_API_PROXY_TARGET || '').trim()

  return {
    plugins: [react(), tailwindcss()],
    server: {
      ...(vercelPort
        ? {
            port: vercelPort,
            strictPort: true,
          }
        : {}),
      ...(proxyTarget
        ? {
            proxy: {
              '/api': {
                target: proxyTarget,
                changeOrigin: true,
              },
            },
          }
        : {}),
    },
  }
})
