import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/app.ts'],
  format: ['esm'],
  dts: false, // Generate TypeScript declaration files
  sourcemap: false, // Include sourcemaps
  clean: true, // Clean the output folder before building
  minify: false,
  outDir: 'dist',
  splitting: !watch,
  target: 'es2016',
  tsconfig: 'tsconfig.json',
  onSuccess: !watch ? '' : 'node ./dist/app.js'
}));
