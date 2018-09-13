module.exports = {
    configureWebpack: {
        performance: {
            hints: "warning",
            maxAssetSize: 2048576,
            maxEntrypointSize: 2048576,
        }
    }
}