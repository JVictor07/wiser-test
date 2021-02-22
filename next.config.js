const withImages = require('next-images')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withImages({
  esModule: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
}))
