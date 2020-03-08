import {userInfo} from '../data/UserData';

class UserServices{

    getAll(){
        return userInfo;
    }

    create(data){
        data.id=Date.now();
        userInfo.push(data);
    }

}

//Note: this simple class so we had created instance using new keyword
export default new UserServices();
