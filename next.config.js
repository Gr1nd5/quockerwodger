/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'development' ? '' : '/quockerwodger', // Adjust for local dev
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/quockerwodger/',
};

module.exports = nextConfig;
