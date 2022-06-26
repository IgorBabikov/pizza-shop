import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import {Provider} from 'react-redux'
import store from '../src/redux/store'

import '../src/styles/app.scss';

const rootElem = document.getElementById('root')

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <Provider store={store}>
      <Router>
         <App />
      </Router>
    </Provider>
  );
}



