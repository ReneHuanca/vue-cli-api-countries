module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/countries/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/assets/scss/main.scss";`
        }
      }
    }
  };