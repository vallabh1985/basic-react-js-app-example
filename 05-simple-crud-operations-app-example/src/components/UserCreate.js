import React from 'react';
import UserForm from './UserForm';
import UserServices from '../services/UserServices';

class UserCreate extends React.Component{

    handleSubmit = data => {
        delete data.id;
        UserServices.create(data);
        this.props.history.push('/');
    }

    render(){
      
        return <UserForm 
                    operation="Add" 
                    userCategory={this.props.category} 
                    callmySubmit={this.handleSubmit}    
                />;
    }
}

export default UserCreate;