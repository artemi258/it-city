/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: false,
 logging: {
  fetches: {
   fullUrl: true,
  },
 },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
