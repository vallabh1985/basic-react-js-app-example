import React from 'react';
import Categories from './Categories';
import PostServices from '../services/PostServices';
import PostDetails from '../components/PostDetails';

    
class Post extends React.Component{
    
    state={
        post:"",
    }

    async componentDidMount(){

        try{
            const posts = await PostServices.getAll();
            this.setState({ post:posts });
        }catch(e){
            console.log("failed to load..")
        }
       
    }

    filterCategory = cat =>{
        
        if (cat != 0){
            const allPost=PostServices.getAll();
            const filterdata=allPost.filter(p => p.category === cat)
            this.setState({post:filterdata});
        }else if(cat == 0){
            this.setState({post:PostServices.getAll()});
        }
          
     
    }

    postDelete = async id =>{
        if (window.confirm('Are you sure?')) {
            try{
                await PostServices.delete(id);
                this.props.history.push('/post'); 
            }catch(e){
                console.log("delete not working")
            }
        }
    }

    render(){
        const categories = this.props.categories;
        const myPost=this.state.post;
      
        return <div className="container-fluid">
            <div className="row mt-4">
            <div className="col-3">
                <h2>Categories</h2>
                <Categories  categories={categories} handleCategory={this.filterCategory}/>
            </div>

            <div className="col-9">
                <h2>Post</h2>

                <table className="table">
                <thead className="thead-dark">
                    <tr className="row">
                    <th className="col-2">Title</th>
                    <th className="col-3">Body</th>
                    <th className="col-2">Author</th>
                    <th className="col-2">Category</th>
                    <th className="col-3">Actions</th>
                    </tr>
                </thead>   
                <tbody>
                    {myPost.length > 0 
                    ? myPost.map(p => <PostDetails key={p.id} data={p} handleDelete={this.postDelete} {...this.props}/>)
                    : <tr>
                        <td>
                            No posts for selected category.
                        </td>
                        </tr>
                    }       
                </tbody>
                </table>

            </div>  
        </div>
        </div>;
    }
}

export default Post;