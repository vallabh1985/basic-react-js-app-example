import {postInfo} from '../data/PostData';

class PostServices{

    getAll(){
        return postInfo;
    }

    create(data){
        data.id=Date.now();
        postInfo.push(data);
    }

    get(id){
        const PostData=postInfo.find(u => u.id ===id);
        return PostData;
    }

    updatePost(data){
        const PostData = postInfo.find(d => d.id === data.id);
        if(PostData){
            PostData.title=data.title;
            PostData.body=data.body;
            PostData.author=data.author;
            PostData.category=data.category;
        } 
    }
    

    delete(id){
        const index = postInfo.findIndex(u => u.id===id);
        postInfo.splice(index,1);

    }

}

//Note: this simple class so we had created instance using new keyword
export default new PostServices();
