import React,{Component} from 'react';
import MyRoutes from './MyRoutes';
import Navbar from './Navbar';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component{
    render(){
        return  <div>
            <Router>
                <Navbar />
                <MyRoutes />   
            </Router>
        </div>;
    }
}


export default App;
