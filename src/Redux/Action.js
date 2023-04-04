import {LIKES} from './Constants'
 
 export const like=(data)=>{
     console.warn("Someone liked your post",data);
     return {
         type:'LIKES',
         data
 }

 }