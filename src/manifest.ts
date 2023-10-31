import { join } from 'path';

import { outputPaths } from './constants/paths';

const manifest = {
  manifest_version: 3,

  name: 'Chrome Extension TypeScript Starter',
  description: 'Chrome Extension, TypeScript, Visual Studio Code',
  version: '1.0',
  action: {
    default_icon: join(outputPaths.relativeAssetsDir, 'icon.png'),
    default_popup: join(outputPaths.relativeAssetsDir, 'popup.html'),
  },

  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: [join(outputPaths.relativeScriptsDir, 'content', 'index.js')],
    },
  ],

  background: {
    service_worker: join(
      outputPaths.relativeScriptsDir,
      'background',
      'index.js',
    ),
  },
  permissions: ['storage'],
  host_permissions: ['<all_urls>'],
};

export { manifest };
