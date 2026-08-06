import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mcd-landings-l-statics.appmcdonalds.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
