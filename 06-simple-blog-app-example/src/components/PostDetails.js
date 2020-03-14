import React from 'react';
import {Link} from 'react-router-dom';

class PostDetails extends React.Component{
   
    handleEditClick = () => {
        this.props.history.push(`/post/${this.props.data.id}/edit`);
    }

    deletePost = e => {
            const pid=e.target.getAttribute('pid');
            this.props.handleDelete(pid);
    }

    render(){
        const singleRow=this.props.data;
        return <tr >
        <td scope="row">{singleRow.title}</td>
        <td >{singleRow.body}</td>
        <td>{singleRow.author}</td>
        <td>{singleRow.category}</td>
        <td>
            <Link className="btn btn-warning mr-2" to={`/post/${singleRow.id}`}>View</Link>
            <input type="button" className="btn btn-success mr-2" value="Edit" onClick={this.handleEditClick}/>
            <input pid={singleRow.id} type="button" className="btn btn-danger mr-2" value="Delete" onClick={this.deletePost}/>
        </td>
      </tr>;
    }

}

export default PostDetails;