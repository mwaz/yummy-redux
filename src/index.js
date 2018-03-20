import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './components/styles/main.css';
import '../node_modules/materialize-css';
import allReducers from './reducers';
import App from './App';
import { userLoggedIn } from './components/actions/auth';

/**
 * create store creates the store for our states
 */

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.token) {
  const user = { access_token: localStorage.token };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
