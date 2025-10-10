import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optional: Add basePath if deploying to project site (username.github.io/repo-name)
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
export default nextConfig;
