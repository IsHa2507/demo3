/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // for static export (optional – remove if not needed)
  images: {
    unoptimized: true, // disables next/image optimization for static export
  },
  typescript: {
    // ignoreBuildErrors: true, // enable only if you're using TypeScript and want to skip type errors
  },
};

module.exports = nextConfig;

