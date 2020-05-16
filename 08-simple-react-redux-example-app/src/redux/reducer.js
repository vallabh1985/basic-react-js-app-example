import {updateCat} from './catActions';


export const catReducer =(state=[],action) => {
    switch(action.type){
        case "CAT":
           return {
                ...state,
                data:action.data
            }

        default:
            return state
    }
}
    
export default catReducer;