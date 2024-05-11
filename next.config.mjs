/** @type {import('next').NextConfig} */
const nextConfig = {
    // Sass support
    sassOptions: {
        includePaths: ['./src'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300
            }
        }
        return config;
    }
};

export default nextConfig;
