import React from 'react';
import PostForm from './PostForm';
import PostServices from '../services/PostServices';

class PostCreate extends React.Component{
    
    submitData = data => {
        const post={
            title:data.title,
            body:data.body,
            author:data.author,
            category:data.category
        }

        PostServices.create(post);
        this.props.history.push("/post");
    }

    render(){
        const categories=this.props.categories;
      
        return <div>
                <PostForm 
                    operation="Create"
                    categories={categories} 
                    submit={this.submitData}
                /></div>;
    }
}

export default PostCreate;