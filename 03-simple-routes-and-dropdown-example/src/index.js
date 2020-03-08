import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


ReactDom.render(<div className="container">
    <App />
</div>, document.getElementById('root'));