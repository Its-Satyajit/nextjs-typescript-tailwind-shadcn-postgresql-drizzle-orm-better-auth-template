import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    reactCompiler: env.NODE_ENV === "production",
  },
};

export default nextConfig;
