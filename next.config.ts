import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig
