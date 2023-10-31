import { join } from 'path';

import { inputPaths, outputPaths } from '../constants/paths';
import { manifest } from '../manifest';
import { cmd, perform } from './helpers';

const entryPoints = [
  'background/index.ts',
  'content/index.ts',
  'popup/index.tsx',
].map((filename) => join(inputPaths.scriptsDir, filename));

async function build() {
  await perform('Clean Dist', () => {
    cmd(`rm -rf ${outputPaths.rootDir}`);
  });

  await perform('Build Scripts', async () => {
    return Bun.build({
      entrypoints: entryPoints,
      outdir: outputPaths.scriptsDir,
      sourcemap: 'inline',
    });
  });

  await perform('Copy Assets', () => {
    cmd(`cp -r ${inputPaths.assetsDir} ${outputPaths.assetsDir}`);
  });

  await perform('Write Manifest', () => {
    Bun.write(outputPaths.manifestPath, JSON.stringify(manifest, null, 2));
  });
}

build();
