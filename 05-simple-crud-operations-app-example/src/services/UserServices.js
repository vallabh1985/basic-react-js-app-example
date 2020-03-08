import {userInfo} from '../data/UserData';

class UserServices{

    getAll(){
        return userInfo;
    }

    create(data){
        data.id=Date.now();
        userInfo.push(data);
    }

    get(id){
        const userData=userInfo.find(u => u.id ===id);
        return userData;
    }

    updateUser(data){
        const userData = userInfo.find(d => d.id === data.id);
        if(userData){
            userData.name=data.name;
            userData.age=data.age;
            userData.Designation=data.Designation;
        } 
    }

    delete(id){
        const index = userInfo.findIndex(u => u.id===id);
        userInfo.splice(index,1);

    }

}

//Note: this simple class so we had created instance using new keyword
export default new UserServices();
