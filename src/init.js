import createBrowserHistory from 'history/createBrowserHistory';
import insertStylesheet from 'json-stylesheets';
import App from './app';
import window from 'global/window';
import document from 'global/document';
import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route } from 'inferno-router';

import Page from './components/page';
import HomePage from './components/home';

export default Init;

if (module.hot) {
  require('inferno-devtools');
}

function Init () {
  insertStylesheet(require('json-stylesheets/minimal'));
  const browserHistory = createBrowserHistory();
  const store = App();

  render((
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ Page }>
          <Route path="/" component={ HomePage } />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app'));

  return app;
}

if (module.hot) {
    module.hot.accept()
}
