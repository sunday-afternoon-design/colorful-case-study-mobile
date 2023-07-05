const path = require('path')

export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    base: '/colorful-case-study-mobile/',
    server: {
        port: 8080
    }
}