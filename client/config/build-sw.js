// build-sw.js
import {injectManifest} from 'workbox-build';

injectManifest({
  swSrc: './config/build-sw.js',
  swDest: './config/service-worker.js',
  globDirectory: './client',
  globPatterns: [
    '**/*.js',
    '**/*.css',
    '**/*.svg'
  ]
});
