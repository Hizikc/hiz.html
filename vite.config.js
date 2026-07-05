import { defineConfig } from 'vite'

export default defineConfig({
  // Указываем имя репозитория, чтобы GitHub Pages правильно находил JS, CSS и картинки
  base: '/dist',

  build: {
    // Папка, куда Vite соберет готовый продакшн-сайт
    outDir: 'docs',
    // Очищать папку dist перед каждой новой сборкой
    emptyOutDir: true,
  },

  // Настройки локального сервера для разработки на компьютере
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true, // Автоматически открывать сайт в браузере при старте
    cors: true, // Разрешить CORS-запросы
  }
})
