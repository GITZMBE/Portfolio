import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'https://eu-west-2.graphassets.com', 
      'eu-west-2.graphassets.com', 
      'https://images.unsplash.com', 
      'images.unsplash.com', 
      'https://static.amazon.jobs', 
      'static.amazon.jobs',
      'https://cdn.jsdelivr.net',
      'cdn.jsdelivr.net',
      'https://cdn.worldvectorlogo.com',
      'cdn.worldvectorlogo.com',
      'https://cdn.icon-icons.com',
      'cdn.icon-icons.com',
      'https://upload.wikimedia.org',
      'upload.wikimedia.org'
    ],
  },
};

export default nextConfig;
