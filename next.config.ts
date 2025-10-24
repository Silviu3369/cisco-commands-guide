// next.config.ts
import type { NextConfig } from "next";

const repoName = 'cisco-commands-guide'; // Definește numele repository-ului aici

const config: NextConfig = {
  output: 'export', // Necesar pentru GitHub Pages
  basePath: `/${repoName}`, // Configurat automat pe baza repoName
  assetPrefix: `/${repoName}/`, // Configurat automat pe baza repoName

  typescript: {
    ignoreBuildErrors: true, // Recomandat 'false' la final
  },
  reactStrictMode: false, // Recomandat 'true', dar necesită testare
  eslint: {
    ignoreDuringBuilds: true, // Recomandat 'false' la final
  },
  images: {
     unoptimized: true, // Necesar pentru export static
  }
};

export default config;
