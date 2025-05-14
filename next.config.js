/** @type {import('next').NextConfig} */

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package.json')

const nextConfig = {
  publicRuntimeConfig: {
    version,
  },
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: `${BACKEND_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
