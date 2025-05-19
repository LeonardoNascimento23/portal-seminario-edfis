/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vercel.com'],
    unoptimized: true
  }
};

module.exports = nextConfig; 