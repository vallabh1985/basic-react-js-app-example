import React,{Component} from 'react';
import {
  NavLink,
} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/post">Post</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/post/new">New Post</NavLink>
          </li>
        </ul>
      </div>;
    }
}

export default Navbar;