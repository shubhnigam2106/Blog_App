export const API_NOTIFICATION_MESSAGE ={
    loading:{
        title:"Loading...",
        message:"Data is being loaded"
    },
    success:{
        title:"Success",
        message:"Data Loaded Successfully"
    },
    requestFailure:{
        title:"Error",
        message:"An error occured while parsing the request data"
    },
    responseFailure:{
        title:"Error",
        message:"An error occured while Fetching the response"
    },
    networkError:{
        title:"Error",
        message:"Error please check your internet connectivity"
    }

}
// HOW TO MAKE API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL : {url:"/",method:'POST/GET/PUT/DELETE' params: true/false ,query: true/false}

export const SERVICE_URLS={
    userSignup:{url:"/signup",method:'POST'},
    userLogin:{url:"/login",method:'POST'}
}