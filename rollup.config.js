import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const config = {
    input: 'src/index.js',
    external: ['react'],
    plugins: [
        uglify()
    ],
    output: {
        format: 'umd',
        name: '_ReactRedux'
    }
}
export default config