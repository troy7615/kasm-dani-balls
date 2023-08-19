/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Balls',
    description: 'A 2d game made by missing youtuber Dani.',
    icon: 'https://imgbb.com/"><img src="https://i.ibb.co/VvjKZ61/unnamed.png',
    listUrl: 'https://troy7615.github.io/kasm-dani-balls',
    contactUrl: 'https://github.com/troy7615/kasm-dani-balls/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
