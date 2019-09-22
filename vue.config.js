module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',

    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    }

}