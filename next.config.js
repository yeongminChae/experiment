/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  experimental: {
    scrollRestoration: true,
  },
};
