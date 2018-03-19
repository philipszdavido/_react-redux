import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const config = {
    input: 'src/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: '_ReactRedux'
    }
}
export default config