/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true } ,
  output: 'export',
  assetPrefix: '', // CRITICAL for GitHub Pages / static hosting
};

module.exports = nextConfig;
