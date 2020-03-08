import React from 'react';
import UserDetails from './UserDetails';
import {userInfo} from '../data/UserData';


const User = () => {
    return <div>
        <h2>User Details</h2>
        {userInfo.map(u => <UserDetails key={u.id} userdata={u}/> )}
    </div>;
}

export default User;