/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/my-resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-resume/' : '',
  trailingSlash: true,
  // Disable type checking and linting during builds
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during production builds
  productionBrowserSourceMaps: false,
  swcMinify: true
}

module.exports = nextConfig 