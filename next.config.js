/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/quockerwodger.ca' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/quockerwodger.ca/' : '',
  };
  
  module.exports = nextConfig;
  