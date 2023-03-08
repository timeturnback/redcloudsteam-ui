import { defineConfig, Options } from 'tsup';
import { externalGlobalPlugin } from 'esbuild-plugin-external-global';

const commonConfig: Options = {
  minify: true,
  dts: true,
  format: ['cjs'],
  sourcemap: true,
  clean: true
};
export default defineConfig([
  {
    ...commonConfig,
    entry: ['src/index.ts'],
    outDir: 'dist',
    esbuildPlugins: [
      externalGlobalPlugin({
        react: 'window.React',
        'react-dom': 'window.ReactDOM'
      })
    ]
    // Add this to fix Dynamic require of "react" is not supported
    // esbuildOptions(options) {
    //   options.external = ['@emotion/css', '@emotion/react', '@emotion/styled'];
    // }
  }
]);
