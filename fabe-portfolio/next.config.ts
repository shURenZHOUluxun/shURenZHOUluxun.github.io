import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.codecademy.com',
        port: '',
        pathname: '/articles/github-pages-via-web-app/**',
      },
    ],
  },
};

export default nextConfig;
