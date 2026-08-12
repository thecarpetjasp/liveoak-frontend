import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only to be run during development! Once live under live-oak-eng.com this needs to be removed!
  basePath: process.env.NODE_ENV === "development" ? "" : "/liveoak-frontend",
};

export default nextConfig;
