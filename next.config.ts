import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://hc-cdn.hel1.your-objectstorage.com/**"),
      new URL("https://lh3.googleusercontent.com/**"),
      new URL("https://avatars.githubusercontent.com/u/**"),
      new URL("https://avatars.githubusercontent.com/u/176337916?v=4"),
    ],
  },
};

export default nextConfig;
