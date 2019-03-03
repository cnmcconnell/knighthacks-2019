export default {
  external: ['express', 'body-parser', 'axios'],
  input: './lib/server.js',
  output: [
    {
      format: 'cjs',
      file: './build/server.js',
      indent: '\t',
    },
  ],
  watch: {
    include: './lib/**',
  },
};
