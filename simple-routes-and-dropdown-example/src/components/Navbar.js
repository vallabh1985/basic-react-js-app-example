import React from 'react';
import {
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

const Navbar = () => {
    return <div className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/adduser">Add User</Link>
            </li>
        </ul>
    </div>;
}

export default Navbar;