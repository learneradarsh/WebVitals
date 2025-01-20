import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/web-vitals-sdk.cjs.js', format: 'cjs' },
    { file: 'dist/web-vitals-sdk.esm.js', format: 'esm' },
  ],
  plugins: [typescript()],
};