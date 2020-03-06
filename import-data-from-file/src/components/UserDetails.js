import React from 'react';

const UserDetails = (props) => {
    const userData =props.userdata;
    
    return <div>
         <hr />
        <p>Name: {userData.name} </p>
        <p>Age: {userData.age} </p>
        <p>Desgination: {userData.Designation} </p>
    </div>;
}

export default UserDetails;