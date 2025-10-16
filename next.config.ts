
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // This disables ESLint during builds on Vercel
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

