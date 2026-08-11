import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
  // Only to be run during development! Once live under live-oak-eng.com this needs to be removed!
  basePath: "/liveoak-frontend",
};

export default nextConfig;
