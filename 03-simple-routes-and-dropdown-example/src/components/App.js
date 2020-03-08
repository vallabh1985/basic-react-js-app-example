import React from 'react';
import User from './User';
import MyRoutes from './MyRoutes';
import AddUser from './AddUser';
import Navbar from './Navbar';

import {
    Link,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


const App = () => {
    return  <div>
                <Router>
                    <Navbar />
                    <MyRoutes />   
                </Router>
            </div>;
}

export default App;
