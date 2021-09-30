import axios from "axios"

const instance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/"
})

const PublicApiInstance = axios.create({
    baseURL : "/api"
})

const PrivateApiInstance = axios.create({
    baseURL : "/api"
})

PrivateApiInstance.interceptors.request.use(function(config){
    // add access token to request
    config.headers.Authorization = "access-token-here"
    console.log(config)
    return config
}, function(error){
    console.log(error.message)
    return Promise.reject(error);
})
PrivateApiInstance.interceptors.response.use(function(response){
    console.log(response.data)
    return response
}, function(error){
    console.log(error.message)
    return Promise.reject(error);
})

export {
    instance, PublicApiInstance, PrivateApiInstance
}