import axios from "axios"

// create instances
const instance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/"
})

const PublicApiInstance = axios.create({
    baseURL : "/api"
})

const PrivateApiInstance = axios.create({
    baseURL : "/api"
})
//


// interceptors of private instance
PrivateApiInstance.interceptors.request.use(function(config){
    // add access token to request
    config.headers.Authorization = localStorage.getItem("accessToken")
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
//


// export every thing
export {
    instance, PublicApiInstance, PrivateApiInstance
}