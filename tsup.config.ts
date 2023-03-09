import { defineConfig, Options } from 'tsup';
import pkg from 'esbuild-plugin-external-global';
const { externalGlobalPlugin } = pkg;

const commonConfig: Options = {
  minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true
};
export default defineConfig([
  {
    ...commonConfig,
    entry: ['src/index.ts'],
    outDir: 'dist',
    // Add this to fix Dynamic require of "react" is not supported
    esbuildOptions(options) {
      options.external = ['@emotion/*'];
      // options.banner = {
      //   js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);"
      // };
    }
  }
]);
