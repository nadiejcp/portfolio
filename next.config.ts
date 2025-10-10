import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '/portfolio', // ← Add this line
  assetPrefix: '/portfolio', // ← And this line
};

export default nextConfig;
