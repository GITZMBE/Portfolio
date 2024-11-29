import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['https://eu-west-2.graphassets.com', 'eu-west-2.graphassets.com', 'https://images.unsplash.com', 'images.unsplash.com', 'https://static.amazon.jobs', 'static.amazon.jobs'],
  },
};

export default nextConfig;
