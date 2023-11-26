/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent fs-related imports from being bundled on the client-side
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
