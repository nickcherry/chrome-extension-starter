import { execSync } from 'child_process';
import { inputPaths } from 'constants/paths';
import { watch } from 'fs';

function rebuild() {
  execSync(`bun run build`);
}

const watcher = watch(
  inputPaths.srcDir,
  { recursive: true },
  (_event, filename) => {
    console.log(`${filename} changed, rebuilding`);
    rebuild();
  },
);

process.on('SIGINT', () => {
  // close watcher when Ctrl-C is pressed
  watcher.close();
  process.exit(0);
});

rebuild();
