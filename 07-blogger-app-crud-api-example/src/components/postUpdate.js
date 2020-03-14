import React from 'react';
import PostForm from './PostForm';
import PostServices from '../services/PostServices'

class PostUpdate extends React.Component{
    
    state={
        updateData:null,
    }

    async componentDidMount(){
        const id=parseInt(this.props.match.params.id);

        try{
            const updateData= await PostServices.get(id);
            this.setState({updateData});
        }catch(e){
            console.log("loading data");
        }
    }

    submitData = async data => { 
        try{
            await PostServices.updatePost(data);
            this.props.history.push("/post");
        }catch(errror){
            console.log("submit data");
        }
        
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