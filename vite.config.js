import react from '@vitejs/plugin-react';

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot backend
        changeOrigin: true,
        secure: false,
      },
    },
    plugins: [react({
      jsxRuntime: 'automatic',
    })],
  },
};
