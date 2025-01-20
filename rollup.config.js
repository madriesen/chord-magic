const typescript = require('rollup-plugin-typescript2')

module.exports = {
  input: 'src/index.ts',
  output: {
    name: 'chordMagic'
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
}
