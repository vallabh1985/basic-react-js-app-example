import React from 'react';
import PostForm from './PostForm';
import PostServices from '../services/PostServices';

class PostCreate extends React.Component{
    
    submitData = async data => {
        const post={
            title:data.title,
            body:data.body,
            author:data.author,
            category:data.category
        }

        try{
            await PostServices.create(post);
            this.props.history.push("/post");
        }catch(e){
            console.log("some problem while creating")
        }
        
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