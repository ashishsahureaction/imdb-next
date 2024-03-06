/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{ serverActions: true },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          pathname: '**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;