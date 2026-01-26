import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
