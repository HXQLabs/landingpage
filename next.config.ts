import { url } from "inspector";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[new URL("https://assets.aceternity.com/**"),new URL("https://avatar.vercel.sh/**"),new URL('https://deifkwefumgah.cloudfront.net/shadcnblocks/**')]
  }
};

export default nextConfig;
