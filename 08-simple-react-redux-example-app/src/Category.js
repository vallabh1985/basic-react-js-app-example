import React from 'react';
import {category} from './data/UserData';
import {updateCat} from './redux/catActions';
import {connect} from 'react-redux';


class Category extends React.Component{
    handleCat = e =>{
       let cid=e.target.getAttribute('catid');
       this.props.updateCat(cid);
    }

    render(){
        console.log(this.props);
        return <div className="left-container">
            <h3 className="mt-3">Category</h3>
            <ul className="list-group">
            {category.map(list=>
                <li className="list-group-item" key={list.id} catid={list.id} onClick={this.handleCat}>{list.catName}</li>
            )}
            </ul>
        </div>
    }
}


const mapDispatchToProps = dispatch =>({
    updateCat: cid => dispatch(updateCat(cid))
})

//this is same as
/*
const mapDispatchToProps = dispatch =>{
    return {
    updateCat: () => dispatch(updateCat(1))
    }
}*/




export default connect(null,mapDispatchToProps)(Category);