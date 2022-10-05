import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/configureStore';
import { getRockets } from './redux/rockets/rockets';
import { getDragons } from './redux/dragons/dragons';
import { getMissions } from './redux/missions/missions';

store.dispatch(getRockets());
store.dispatch(getDragons());
store.dispatch(getMissions());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
