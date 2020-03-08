import React from 'react';

class UserCreate extends React.Component{

    state={
        id:0,
        uname:'',
        age:'',
        Designation: '',
        checkFlag:false
    }

    static getDerivedStateFromProps(props, state) {
        if (props.operation === 'Update' && props.userData && !state.checkFlag) {
        
          props.userData['uname']=props.userData['name'];
          return {
            ...props.userData,
            checkFlag: true
          };
        }
    
        return null;
      }

    handleChange = e =>{
       const name=e.target.name; 
       const value=e.target.value;

       this.setState({[name]:value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {id, uname, age, Designation}= this.state;

        const data={
            id,
            name:uname,
            age,
            Designation
        }
        
        this.props.callmySubmit(data);
    }

    render() {
        const {id, uname, age, Designation}= this.state;
       
        return <div>
            <h2 className="mt-4">{this.props.operation} User</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">User Name:</label>
                    <input id="uname" name="uname" type="text" className="form-control" onChange={this.handleChange} value={uname} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">User Age:</label>
                    <input id="age" name="age" type="text" className="form-control" onChange={this.handleChange} value={age}/>
                </div>
                <div className="form-group">
                    <label htmlFor="desig">User Age:</label>
                    <select id="Designation" name="Designation" className="form-control" onChange={this.handleChange} value={Designation}>
                        <option>--Select--</option>
                        {this.props.userCategory.map(c => <option key={c.id} value={c.id}>{c.catName}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>;
    }
}

export default UserCreate;