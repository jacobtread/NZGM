module.exports = {
  publicPath: process.env.GITHUB_PAGES
    ? "/NZGM/"
    : "/",
  pwa: {
    name: "NZGM",
    themeColor: "#1565c0",
    assetsVersion: "0.5.2",
    iconPaths: {
      faviconSVG: 'img/icons/logo.svg',
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/logo.svg',
      msTileImage: null
    }
  }
}