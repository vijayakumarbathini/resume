/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-resume',
  assetPrefix: '/my-resume/',
}

module.exports = nextConfig 