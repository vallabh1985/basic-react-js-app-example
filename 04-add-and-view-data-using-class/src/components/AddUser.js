import React from 'react';
import {category} from '../data/UserData';
import UserServices from '../services/UserServices';

class AddUser extends React.Component{

    state = {
        uname:'Default Name',
        age:'',
        Designation:'',
    }

    handleChange = e => {
        const name=e.target.name;
        const value=e.target.value;
        console.log(value);
        
        this.setState({[name]:value});
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {uname,age,Designation}=this.state;

        const data ={
            name:uname,
            age,
            Designation
        }
       
        UserServices.create(data);

        this.props.history.push('/'); //This will redirect to homepage
    }


    render() {
        
        const {uname,age,Designation}=this.state;

        return <div>
            <h2 className="mt-4">Add New User</h2>
            <form>
                <div className="form-group">
                    <label for="name">User Name:</label>
                    <input id="uname" name="uname" type="text" className="form-control" onChange={this.handleChange} value={uname} />
                </div>
                <div className="form-group">
                    <label for="age">User Age:</label>
                    <input id="age" name="age" type="text" className="form-control" onChange={this.handleChange} value={age} />
                </div>
                <div className="form-group">
                    <label for="desig">User Age:</label>
                    <select id="Designation" name="Designation" className="form-control" onChange={this.handleChange}>
                        <option>--Select--</option>
                        {category.map(c => <option value={c.id}>{c.catName}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>;
    }
}

export default AddUser;