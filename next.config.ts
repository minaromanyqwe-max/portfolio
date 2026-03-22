import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net', // عشان صور Devicon
      },
      {
        protocol: 'https',
        hostname: 'v4.tanstack.com', // عشان لوجو TanStack
      },
    ],
  },
};

export default nextConfig;