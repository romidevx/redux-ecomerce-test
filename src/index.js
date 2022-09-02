import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// PROVIDER
import { Provider } from 'react-redux';
// STORE
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  rootElement
);
