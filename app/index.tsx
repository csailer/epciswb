import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { history, configuredStore } from './store';
import theme from './theme';

const store = configuredStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const Root = require('./containers/Root').default;
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
    </ThemeProvider>,

    document.getElementById('root')
  );
});
