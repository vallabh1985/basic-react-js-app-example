import React from 'react';
import {userInfo} from './data/UserData';
import {connect} from 'react-redux';

class User extends React.Component{
   
    render(){
        const cid=this.props.state.catReducer.data;

        return <div className="right-container">
             <h3 className="ml-3 mt-3">User List</h3>
            <table className="table ml-3">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">age</th>
                <th scope="col">Designation</th>
                </tr>
            </thead>
            <tbody>
            {cid 
            ? 
                userInfo.filter(item => item.Designation === cid).map(list=>
                    <tr key={list.id}>
                    <th scope="row">{list.id}</th>
                    <td>{list.name}</td>
                    <td>{list.age}</td>
                    <td>{list.Designation}</td>
                    </tr>
                )
            : 
              userInfo.map(list=>
                <tr key={list.id}>
                <th scope="row">{list.id}</th>
                <td>{list.name}</td>
                <td>{list.age}</td>
                <td>{list.Designation}</td>
                </tr>
               )
            }    
           
            </tbody>
            </table>
        </div>;
    }
}

const mapStateToProps = state =>({
    state
})


export default connect(mapStateToProps,null)(User);

