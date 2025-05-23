import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
