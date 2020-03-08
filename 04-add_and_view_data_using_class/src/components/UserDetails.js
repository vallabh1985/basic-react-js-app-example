import React from 'react';


const UserDetails = (props) => {
    const userData =props.userdata;
    
    return <tr>
        <td>{userData.name}</td>
        <td>{userData.age}</td>
        <td>{userData.Designation}</td>
        <td><input type="button" className="btn-success" value="Edit" /></td>
        <td><input type="button" className="btn-danger" value="Delete" /></td>
        </tr>;
}

export default UserDetails;