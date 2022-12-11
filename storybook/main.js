module.exports = {
  stories: [
    './CommonStories.tsx',
    './GroupOfOptionsStories.tsx',
    './SubcomponentsStories.tsx',
    './DynamicUpdateStories.tsx.tsx',
    './IssuesStories.tsx',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    babelModeV7: true,
    postcss: false,
  },
};
