import React from 'react';
import { category } from '../data/PostData';

class PostForm extends React.Component{
    
    state={
            id:0,
            title:"",
            body:"",
            author:"",
            category:"",
            checkFlag:false
    }

    static getDerivedStateFromProps(props, state) {
       if(props.operation==="Update" && props.post && !state.checkFlag){
           return{
            ...props.post,
            checkFlag:true
           }
       }

       return null;
    }

    handleChange = e => {
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});
    } 

    handleSubmit = e => {
        e.preventDefault();
        
        const {id,title,body,author,category}=this.state;

        const post={
            id:id,
            title:title,
            body:body,
            author:author,
            category:category
        }

        this.props.submit(post);
    }
    
    render(){
        const categories=this.props.categories;
        const {title,body,author,category}=this.state;

        return <div className="container mt-4">
            <h2>{this.props.operation} Post</h2>
            <form className="mt-2">
                <div className="form-group" >
                    <label htmlFor="title" >Post Title</label>
                    <input id="title" name="title" type="text" 
                    onChange={this.handleChange} className="form-control" value={title}/>
                </div>
                <div className="form-group" >
                    <label htmlFor="body" >Post Description</label>
                    <textarea  id="body" name="body" type="text" 
                    onChange={this.handleChange} className="form-control" value={body}/>
                </div>
                <div className="form-group" >
                    <label htmlFor="author" >Author</label>
                    <input id="author" name="author" type="text" 
                    onChange={this.handleChange} className="form-control" value={author}/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" onChange={this.handleChange} className="form-control" value={category}>
                    <option value="">--Select--</option>    
                        {categories.map(c=><option key={c.id} value={c.id} >{c.name}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <input id="savebtn" name="savebtn" type="submit" value="Save" onClick={this.handleSubmit}
                        className="form-control btn btn-info"/>
                </div>
            </form>
        </div>;
    }
}

export default PostForm;