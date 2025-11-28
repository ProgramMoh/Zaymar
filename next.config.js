/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // removed 'output: export' so Vercel can optimize site
  // removed 'basePath' so assets load from the root correctly
  // removed 'images: unoptimized' so Vercel can automatically resizes images
}

module.exports = nextConfig