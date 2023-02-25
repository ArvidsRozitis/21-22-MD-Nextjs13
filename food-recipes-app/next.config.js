/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.istockphoto.com', "images.immediate.co.uk"],
  }, 
}




module.exports = nextConfig
