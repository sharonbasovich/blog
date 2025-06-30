import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://hc-cdn.hel1.your-objectstorage.com/**"),
      new URL("https://lh3.googleusercontent.com/**"),
    ],
  },
};

export default nextConfig;
