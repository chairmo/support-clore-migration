const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['app.js'],
    bundle: true,
    platform: 'browser',
    target: 'es2022',
    outfile: 'bundle.js',
  })
  .catch((err) => {
    console.error(err);
  });
