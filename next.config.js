/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    distDir: 'out',   // Directory for static files
    images: {
        unoptimized: true, // Disable image optimization
    },
    basePath: '/<your-repo-name>', // Your GitHub repo name
    assetPrefix: '/<your-repo-name>/', // Your GitHub repo name
};

module.exports = nextConfig;
