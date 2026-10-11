/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The home page is the static single-page portfolio in public/portfolio.html
  async rewrites() {
    return {
      beforeFiles: [{ source: '/', destination: '/portfolio.html' }],
    }
  },
}

module.exports = nextConfig
