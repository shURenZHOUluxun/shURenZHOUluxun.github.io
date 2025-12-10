import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
