import React,{Component} from 'react';
import Category from './Category';
import User from './User';
import './App.css';
//import {alertpost,alertcat,customPost} from './actions/postAction';


class App extends Component{

   
    render(){

        return <div className="container">
            <Category />
            <User />
        </div>;
    }
}


export default App;
