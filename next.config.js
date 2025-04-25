/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-resume',
  assetPrefix: '/my-resume/',
  trailingSlash: true,
}

module.exports = nextConfig 