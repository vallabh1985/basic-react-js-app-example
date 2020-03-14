class PostServices{
    //apiUrl = `${process.env.REACT_APP_API_BASE_URL}/posts`;
    apiUrl = "http://localhost:3001/posts";

    getAll(){
        return fetch(this.apiUrl).then(Response => Response.json());
    }


    create(data){
        data.id=Date.now();

        return fetch(this.apiUrl, {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                'Content-Type':'application/json'
            }
        }).then(response => response.json());
    }

    get(id){ 
        return fetch(`${this.apiUrl}/${id}`).then(Response => Response.json());
    }

    updatePost(data){
        return fetch(`${this.apiUrl}/${data.id}`, {
            method : 'PATCH',
            body : JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }
        ).then(response => response.json());
    }
    

    delete(id){
        return fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE'
          })
            .then(response => response.json());
    }

}

//Note: this simple class so we had created instance using new keyword
export default new PostServices();
