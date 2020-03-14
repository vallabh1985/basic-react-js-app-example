import React from 'react';
import PostServices from '../services/PostServices';
import { getDefaultNormalizer } from '@testing-library/react';

class SinglePost extends React.Component{

    state={
        postData:"",
    }

    handleEditClick = () => {
        const postId=parseInt(this.props.match.params.id);
        this.props.history.push(`/post/${postId}/edit`);
    }

    deletePost = async data => {
        if (window.confirm('Are you sure?')) {
            try{
                const postId=parseInt(this.props.match.params.id);
                await PostServices.delete(postId);
                this.props.history.push(`/post`);
            }catch(error){
                console.log("delete this item error");
            }
          
        }
    }

    async componentDidMount(){
        try{
            const postId=parseInt(this.props.match.params.id);
            const pdata = await PostServices.get(postId);
            this.setState({postData:pdata})
        } catch(e) {
            console.log("unable to load..");
        }
    }

    render(){
        const postData=this.state.postData;

        if(!postData){
            return <div><h2>No data for this id</h2></div>;
        }

        return <div className="card">
        <div className="card-header">
            {postData.title}
        </div>
        <div className="card-body">
          <h5 className="card-title">{postData.title}</h5>
          <p className="card-text">{postData.body}</p>
          <p className="card-text">{postData.author}</p>
        </div>
        <div className="card-footer">
            <input type="button" className="btn btn-success mr-2" value="Edit" onClick={this.handleEditClick}/>
            <input type="button" className="btn btn-danger mr-2" value="Delete" onClick={this.deletePost}/>
        </div>
      </div>;
    }
} 

export default SinglePost;