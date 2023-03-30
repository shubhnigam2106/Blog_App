 export const like=(data)=>{
     console.warn("Someone liked your post",data);

     return {
         type:'likes',
         data
 }

 }