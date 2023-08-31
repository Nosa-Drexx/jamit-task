/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    disable: false,
    skipWaiting: true,
  }),
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
