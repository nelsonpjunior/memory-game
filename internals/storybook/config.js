import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../../src/global-styles';

const req = require.context('../../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => <div>{ story() }</div>);

configure(loadStories, module);
