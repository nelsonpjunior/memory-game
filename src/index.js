import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles';

function init() {
  const Root = require('./containers/Root').default;
  ReactDOM.render(<Root />, document.getElementById('o-root'));
}

// in development, set up HMR:
if (module.hot) {
  module.hot.accept('./containers/Root', () => requestAnimationFrame(init));
}

init();
