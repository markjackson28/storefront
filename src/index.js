import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './Store/store';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


