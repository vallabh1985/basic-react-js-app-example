import React,{Component} from 'react';
import User from './User';
import UserUpdate from './UserUpdate';
import UserCreate from './UserCreate';
import CategoryServices from '../services/CategoryServices';
import {
    Route
} from 'react-router-dom';


//Notes: {...props}  this will all props to page example History,URL params
class MyRoutes extends Component{
    render(){
        return <div>
        <Route exact path="/" component={User} />
        <Route exact path="/user/:id/edit" 
            render={(props)=><UserUpdate category={CategoryServices.getAll()} {...props} />}/>
        <Route exact path="/user/new" 
            render={(props)=><UserCreate category={CategoryServices.getAll()}  {...props} />}/>
        </div>;
    }
}

export default MyRoutes;