import React,{Component} from 'react';
import UserDetails from './UserDetails';
import UserServices from '../services/UserServices';

class User extends Component{
    render() {

        const userRecord= UserServices.getAll();
        
        return <div>
            <h2 className="mt-4">User Details</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {userRecord.map(u => <UserDetails key={u.id} userdata={u}/> )}
            </tbody>
            </table>
        </div>;
    }
}

export default User;