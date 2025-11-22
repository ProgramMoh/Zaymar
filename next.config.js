/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is not 'Zaymar', update this:
  // basePath: '/Zaymar',
  // trailingSlash: true,
}

module.exports = nextConfig

