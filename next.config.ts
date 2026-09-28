import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    // Allow builds to succeed even if ESLint reports issues. CI can run lint separately.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
