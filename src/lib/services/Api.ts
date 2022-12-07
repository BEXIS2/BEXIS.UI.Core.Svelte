// Api.js
// import axios from "axios";
import { host, username, password } from "../stores/apistore.js";

console.log("setup fetch")

// implement a method to execute all the request from here.
const apiRequest = (method:string, url:string, request:string|FormData) => {
 
   console.log("url",url);
   console.log("host",host);
   console.log("request",request);

   const destination = host+url
   let contentType = "";

   let body;

   console.log("destination",destination);

    if(typeof request == "string")
    {
      body = JSON.stringify(request)
      contentType = 'application/json'
    }
    else
    {
      body = request
      contentType = 'multipart/form-data'
    }

    const headers = {
      authorization: 'Basic ' + btoa(username + ":" + password),
      'content-type':contentType
    };

    return fetch(destination,{
      method,
      headers,
      body
    })
    .then(response => response)
    .catch(err => {
      //console.log("err",err);
      return Promise.reject(err);
    });

};

// function to execute the http get request
const get = (url:string, request = "") => apiRequest("get",url,request);

// function to execute the http delete request
const deleteRequest = (url:string, request:string) =>  apiRequest("delete", url, request);

// function to execute the http post request
const post = (url:string, request:string|FormData) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url:string, request:string|FormData) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url:string, request:string|FormData) =>  apiRequest("patch", url, request);

// expose your method to other services or actions
export const Api ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
