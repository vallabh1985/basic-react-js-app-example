import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer';

const mystore=createStore(rootReducer);

ReactDOM.render(<Provider store={mystore}>
  <div>
    <App/>
  </div>
  </Provider>,
  document.getElementById('root')
);
