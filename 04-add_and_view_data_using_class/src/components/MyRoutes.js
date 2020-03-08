import React,{Component} from 'react';
import User from './User';
import AddUser from './AddUser';
import {
    Route
} from 'react-router-dom';


class MyRoutes extends Component{
    render(){
        return <div>
        <Route exact path="/" component={User} />
        <Route exact path="/adduser" component={AddUser} />
        </div>;
    }
}

export default MyRoutes;