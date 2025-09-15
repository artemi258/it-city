/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'encrypted-tbn0.gstatic.com',
    port: '',
    pathname: '/**',
   },
  ],
 },
 async headers() {
  return [
   {
    source: '/api/:path*',
    headers: [
     {
      key: 'Access-Control-Allow-Origin',
      value: '*', // Set your origin
     },
     {
      key: 'Access-Control-Allow-Methods',
      value: 'GET, POST, PUT, DELETE, OPTIONS',
     },
     {
      key: 'Access-Control-Allow-Headers',
      value: 'Content-Type, Authorization',
     },
    ],
   },
  ];
 },
 reactStrictMode: false,
 logging: {
  fetches: {
   fullUrl: true,
  },
 },
};

module.exports = nextConfig;
