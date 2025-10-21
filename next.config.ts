/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'images.pexels.com'], // allow Cloudinary images
  },
};

module.exports = nextConfig;
