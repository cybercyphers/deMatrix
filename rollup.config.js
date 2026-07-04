// rollup.config.js
export default [
  {
    input: 'index.js',              // your main source file
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto'
    },
    external: ['axios', 'crypto']   // don't bundle dependencies
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      format: 'esm'
    },
    external: ['axios', 'crypto']
  }
];
