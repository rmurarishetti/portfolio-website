/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');

const envConfig = dotenv.config({
  path: '.env.local',
}).parsed;

// Update the LAST_UPDATED variable in the .env.local file
function updateLastUpdated() {
  const date = new Date().toISOString().slice(0, 10);
  const updatedEnvConfig = {
    ...envConfig,
    LAST_UPDATED: new Date(date), // convert string to Date object
  };
  const updatedEnvString = Object.entries(updatedEnvConfig)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  require('fs').writeFileSync('.env.local', updatedEnvString);
}

// Update LAST_UPDATED on build
if (process.env.NODE_ENV === 'production') {
  updateLastUpdated();
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  env: {
    LAST_UPDATED: envConfig.LAST_UPDATED,
  }
}

module.exports = nextConfig
