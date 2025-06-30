import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // this version is outdated
      // {
      //   hostname: "google.com",
      //   protocol: "https",
      //   port: "",
      // },
      new URL("https://placehold.co/600x400.png"),
      new URL("https://lh3.googleusercontent.com"),
    ],
  },
};

export default nextConfig;
