import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages repository name is configured here.
const repo = 'lchf-diet-pwa'
export default defineConfig({
  base: '/LCHF/',
  plugins: [VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icon-192.png', 'icon-512.png'],
    manifest: {
      name: 'LCHF Diet Coach', short_name: 'LCHF Coach',
      description: '저탄고지 식단과 체중 기록',
      theme_color: '#0b766b', background_color: '#f4f7f5',
      display: 'standalone', start_url: '.', scope: '.', lang: 'ko',
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    workbox: { navigateFallback: 'index.html', globPatterns: ['**/*.{js,css,html,png,svg,ico}'] }
  })]
})
