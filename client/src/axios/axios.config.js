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


// // interceptors of private instance
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
    console.log(response.config)
    return response
}, function(error){
    const status = error.response?.status
    if(status === 401){
        //get old config of this request
        const config = error.config
        //call api to refreshing token
        return PrivateApiInstance.get("/auth/refresh-token")
        .then(rs => {
            //get new access token from response
            const { accessToken } = rs.data
            //store new access token to local storage
            localStorage.setItem("accessToken", accessToken)

            //update old access token with new one in old config
            config.headers.Authorization = accessToken
            //return the old request
            return PrivateApiInstance(config)
        })
        .catch(e => Promise.reject(e))
    } else if(status === 400) {
        return Promise.reject({ message : "Bạn cần đăng nhập lại!" })
    } else {
        return Promise.reject(error)
    }
})
//


// export every thing
export {
    instance, PublicApiInstance, PrivateApiInstance
}