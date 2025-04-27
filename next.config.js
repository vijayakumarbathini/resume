/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/my-resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-resume/' : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 