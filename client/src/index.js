import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css';
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

