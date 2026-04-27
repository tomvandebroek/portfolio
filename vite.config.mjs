import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Relative asset paths keep the site working on GitHub Pages subpaths.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        skills: resolve(__dirname, 'skills.html'),
        experience: resolve(__dirname, 'experience.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
