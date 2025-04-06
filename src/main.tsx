import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './ScrollToTop';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/vite-react-deploy">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
