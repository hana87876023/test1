/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'cdn.pixabay.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig