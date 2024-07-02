import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer.js';
import Stepcontext from './components/page_dv_coach/StepContext.jsx';
import './components/AR_EN_FR/18next.js'


const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Stepcontext>
      <App />
      </Stepcontext>
    </Provider>
  </React.StrictMode>
);
