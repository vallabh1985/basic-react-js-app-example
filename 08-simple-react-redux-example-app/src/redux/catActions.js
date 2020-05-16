import {CAT} from './constants';

export const updateCat = cid =>{
    return {
        type:CAT,
        data:cid
    } 
};