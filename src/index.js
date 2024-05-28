import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'components/redux/store';
import { BrowserRouter } from 'react-router-dom';
// import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { PersistGate } from 'redux-persist/integration/react';

// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/react-hw-08-phonebook">
          <React.Fragment>
            <CssBaseline />
            <App />
          </React.Fragment>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
