/** @type {import('next').NextConfig} */
const nextConfig = { images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '89.232.167.133',
      port: '1337',
      pathname: '/uploads/**',
    },
  ],
},}

module.exports = nextConfig
