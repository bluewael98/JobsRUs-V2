/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
