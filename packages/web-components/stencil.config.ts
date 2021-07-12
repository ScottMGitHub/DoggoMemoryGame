import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { includePaths as includeStylePaths } from '@doggo-memory-game/styles';

export const config: Config = {
  namespace: 'web-components',
  plugins: [
    sass({
      includePaths: [
        ...includeStylePaths,
        './src/components'
      ],
      injectGlobalPaths: [
          './src/globals/styles/global',
      ],
  })
  ],
  outputTargets: [
    {
      type: 'dist',
      // esmLoaderPath: 'loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
};
