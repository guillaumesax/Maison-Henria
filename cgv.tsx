import React from 'react';
import ReactDOM from 'react-dom/client';
import { TermsAndConditions } from './components/TermsAndConditions';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <TermsAndConditions />
  </React.StrictMode>,
);
