const {createProxyMiddleware} = require('http-proxy-middleware')

// See the link below for more details:
// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
module.exports = function (app) {
  app.use(
    '/path',
    createProxyMiddleware({
      target: 'target',
      changeOrigin: true
    })
  )
}
