import React from 'react';
import User from './User';
import AddUser from './AddUser';
import {
    Route
} from 'react-router-dom';

const MyRoutes = () => {
    return <div>
    <Route exact path="/" component={User} />
    <Route exact path="/adduser" component={AddUser} />
    </div>;
}

export default MyRoutes;