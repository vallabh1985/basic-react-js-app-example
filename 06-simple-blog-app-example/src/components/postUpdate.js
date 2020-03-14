import React from 'react';
import PostForm from './PostForm';
import PostServices from '../services/PostServices'

class PostUpdate extends React.Component{
    
    state={
        updateData:null,
    }

    componentDidMount(){
        const id=parseInt(this.props.match.params.id);
        const updateData=PostServices.get(id);
        this.setState({updateData});
       
    }

    submitData = data => { 
        PostServices.updatePost(data);
        this.props.history.push("/post");
    }
    
    render(){
     
        const categories=this.props.categories;
        return <div>
                <PostForm 
                    operation="Update"
                    categories={categories} 
                    post={this.state.updateData} 
                    submit={this.submitData}
                    />
                </div>;
    }
}

export default PostUpdate;