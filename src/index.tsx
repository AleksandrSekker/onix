import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { store } from './redux/store';
import './i18n/i18n';
import Loader from './components/Loader/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
