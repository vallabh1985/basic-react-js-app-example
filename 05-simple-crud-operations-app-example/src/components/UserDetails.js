import React from 'react';
import {Link} from 'react-router-dom';


const UserDetails = (props) => {
    const userData =props.userdata;
    
    return <tr>
        <td>{userData.name}</td>
        <td>{userData.age}</td>
        <td>{userData.Designation}</td>
        <td><Link to={`/user/${userData.id}/edit`}>Edit</Link></td>
        <td><input type="button" className="btn-danger" value="Delete" key={userData.id} onClick={()=>props.deleteUser(userData.id)} /></td>
        </tr>;
}

export default UserDetails;