import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.jsx';
import AppProvider from './providers/AppProvider.jsx';

/* ---- Include global variables first ---- */
import '@spectrum-css/vars/dist/spectrum-global.css';

/* ---- Include only the scales your application needs ---- */
import '@spectrum-css/vars/dist/spectrum-large.css';
import '@spectrum-css/vars/dist/spectrum-medium.css';

/* ---- Include only the colorstops your application needs ---- */
import '@spectrum-css/vars/dist/spectrum-light.css';
import '@spectrum-css/vars/dist/spectrum-dark.css';
import '@spectrum-css/vars/dist/spectrum-darkest.css';

/* ---- Include index-vars.css for all components you need ---- */
import '@spectrum-css/page/dist/index-vars.css';
import '@spectrum-css/typography/dist/index-vars.css';
import '@spectrum-css/sidenav/dist/index-vars.css';

import './prism.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
);
