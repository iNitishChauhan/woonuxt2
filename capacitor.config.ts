//import { CapacitorConfig } from '@capacitor/cli';
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nuxt.minddigital.app',
  appName: 'woonuxt',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
