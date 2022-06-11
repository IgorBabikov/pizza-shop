import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../src/styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

