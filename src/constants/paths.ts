import { join, normalize } from 'path';

const rootDir = normalize(join(import.meta.dir, '..', '..'));

const srcDir = join(rootDir, 'src');
const distDir = join(rootDir, 'dist');

const relativeAssetsDir = 'assets';
const relativeScriptsDir = 'scripts';

const inputPaths = {
  srcDir,
  relativeAssetsDir,
  relativeScriptsDir,
  assetsDir: join(srcDir, relativeAssetsDir),
  scriptsDir: join(srcDir, relativeScriptsDir),
};

const outputPaths = {
  rootDir: distDir,
  relativeAssetsDir,
  relativeScriptsDir,
  assetsDir: join(distDir, relativeAssetsDir),
  scriptsDir: join(distDir, relativeScriptsDir),
  manifestPath: join(distDir, 'manifest.json'),
};

export { inputPaths, outputPaths };
