import React,{Component} from 'react';
import MyRoutes from './MyRoutes';
import Navbar from './Navbar';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component{
    render(){
        return  <React.Fragment>
            <div><h1 className="mb-4">Simple Blog Website</h1></div>
            <Router>
                <Navbar />
                <MyRoutes />   
            </Router>
        </React.Fragment>;
    }
}


export default App;
