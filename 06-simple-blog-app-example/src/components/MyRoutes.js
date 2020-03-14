import React,{Component} from 'react';
import CategoryServices from '../services/CategoryServices';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import PostCreate from './PostCreate';
import PostUpdate from './postUpdate';
import SinglePost from './SinglePost';


//Notes: {...props}  this will all props to page example History,URL params
class MyRoutes extends Component{
    render(){
        return <React.Fragment>   
                <Switch>
                    <Route exact path="/" component={Home} />  
                    <Route exact path="/post" 
                        render={(props)=><Post categories={CategoryServices.getAll()} {...props} />}
                            />  
                    <Route exact path="/post/new" 
                        render={(props)=><PostCreate categories={CategoryServices.getAll()} {...props} />}
                    />
                     <Route exact path="/post/:id/edit" 
                        render={(props)=><PostUpdate categories={CategoryServices.getAll()} {...props} />}
                    />

                    <Route exact path="/post/:id" 
                        render={(props)=><SinglePost {...props} />}
                    />
                </Switch>
                </React.Fragment>;
    }
}

export default MyRoutes;