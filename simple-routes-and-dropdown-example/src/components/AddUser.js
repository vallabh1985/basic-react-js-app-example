import React from 'react';
import {category} from '../data/UserData';

const AddUser = () => {
    
    return <div>
        <h2>Add New User</h2>
        <form>
            <div className="form-group">
                <label for="uname">User Name:</label>
                <input id="uname" name="uname" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label for="age">User Age:</label>
                <input id="age" name="age" type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="desig">User Age:</label>
                <select id="desig" name="desig" className="form-control">
                    <option>--Select--</option>
                    {category.map(c => <option value={c.id}>{c.catName}</option>)}
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>;
}

export default AddUser;