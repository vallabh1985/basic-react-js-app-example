import React,{Component} from 'react';
import UserForm from './UserForm';
import UserServices from '../services/UserServices';


class UserUpdate extends Component{

    state={
        userData:null,
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id);
        
        const data=UserServices.get(id);
        this.setState({userData:data});
                   
    }

    handleSubmit = data =>{
        UserServices.updateUser(data);
        this.props.history.push('/');
    }

    render(){
        return <UserForm 
                    operation="Update"  
                    userCategory={this.props.category} 
                    userData={this.state.userData}
                    callmySubmit={this.handleSubmit} 
                    />;
    }
       
        

}

export default UserUpdate;