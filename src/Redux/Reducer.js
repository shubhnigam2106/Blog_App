import {LIKES} from './Constants'

export const likesdata =(data=[],action)=>{
   
    switch(action.type){
        case  LIKES:
            console.log("Reducer called",action)
            return [action.data,...data]
        default:
            return data
    }
}