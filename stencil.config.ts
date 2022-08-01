import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'carto-ds',
  globalStyle: './src/global/carto-ds.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
