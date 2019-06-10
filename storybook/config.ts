import { configure } from '@storybook/react';

function loadStories() {
  require('./stories.tsx');
}

configure(loadStories, module);
