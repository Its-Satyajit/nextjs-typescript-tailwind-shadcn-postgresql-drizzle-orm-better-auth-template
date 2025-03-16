import type { NextConfig } from "next";

import env from "@/env";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: env.NODE_ENV === "production",

    turbo: {
      resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
    },
  },
  eslint: {
    ignoreDuringBuilds: env.SKIP_BUILD_CHECKS === "true",
  },
  typescript: {
    ignoreBuildErrors: env.SKIP_BUILD_CHECKS === "true",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
