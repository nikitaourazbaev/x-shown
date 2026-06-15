import * as esbuild from 'esbuild';

const [, , ...args] = process.argv;

const allOptions = [
  {
    entryPoints: ['builds/cdn.js'],
    outfile: `dist/cdn.js`,
    bundle: true,
    platform: 'browser',
  },
  {
    entryPoints: ['builds/cdn.js'],
    outfile: `dist/cdn.min.js`,
    bundle: true,
    minify: true,
    platform: 'browser',
  },
  {
    entryPoints: ['builds/module.js'],
    outfile: `dist/module.esm.js`,
    bundle: true,
    platform: 'neutral',
    mainFields: ['module', 'main'],
  },
  {
    entryPoints: ['builds/module.js'],
    outfile: `dist/module.esm.min.js`,
    bundle: true,
    minify: true,
    platform: 'neutral',
    mainFields: ['module', 'main'],
  },
  {
    entryPoints: ['builds/module.js'],
    outfile: `dist/module.cjs.js`,
    bundle: true,
    target: ['node10.4'],
    platform: 'node',
  },
];

if (args.includes('--watch')) {
  for (const options of allOptions) {
    const ctx = await esbuild.context(options);

    await ctx.watch();
  }
} else {
  await Promise.all(allOptions.map((options) => esbuild.build(options)));
}
