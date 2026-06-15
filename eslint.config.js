export default [
  {
    ignores: ['dist/*.bundle.js'],
  },
  {
    files: ['src/**/*.js'],
    rules: {
      camelcase: [
        'warn',
        {
          allow: ['^_x_.*'], // Allow variables starting with _x_
        },
      ],
      'prefer-const': ['warn', { ignoreReadBeforeAssign: true }],
    },
  },
];
