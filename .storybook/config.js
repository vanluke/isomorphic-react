import {configure} from '@storybook/react';

function loadStories() {
  require('../stories/home');
  require('../stories/landing');
}

configure(loadStories, module);
