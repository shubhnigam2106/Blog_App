import axios from "axios";
import { API_NOTIFICATION_MESSAGE,SERVICE_URLS } from "../constants/config";
const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

// INCASE OF REQUEST

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//INCASE OF RESPONSE
axiosInstance.interceptors.response.use(
  function (response) {

    return processResponse(response);
  },
  function (error) {

    return Promise.reject(processError(error));
  }
);
////////////////////////////////////
///IF SUCCESS-> RETURN {ISSUCCESS:TRUE,DATA:OBJECT}
//IF FAIL -> RETURN {ISFAILURE:TRUE,STATUS:STRING,MSG:STRING,CODE:INT}

const processResponse = (response) => {
  console.log(response)
  if (response?.status === 200) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};
const processError = (error) => {
  if (error.response) {
    console.log("Error in Response", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.responseFailure,
      code: error.response.code
    };
  } else if (error.request) {
    console.log("Error in Request", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.requestFailure,
      code: "",
    };
  } else {
    console.log("Error in Network", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.networkError,
      code: "",
    };
  }
};


const API ={};

for ( const [key,value] of Object.entries(SERVICE_URLS)){
    API[key]= (body)=>
        axiosInstance({
            method:value?.method,
            url:value?.url,
            data:body,
            responseType:value?.responseType,
        })
}
export {API}