import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './components/Application';
import './app.global.css';

render(
  <AppContainer>
    <Application history={null} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Application', () => {
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
    // eslint-disable-next-line global-require
    const Application = require('./components/Application').default;
    render(
      <AppContainer>
        <Application history={null} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
