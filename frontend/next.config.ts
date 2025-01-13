import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ["upload.wikimedia.org"],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

export default nextConfig;
