module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                  @import "~bootstrap/dist/css/bootstrap.css";
                   `
            }
        }
    },

    devServer: {
        watchOptions: {
            clientLogLevel: 'warning'
        }
    }
}