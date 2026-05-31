import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/skyrim-character-builder-app/',
  plugins: [react()]
});
