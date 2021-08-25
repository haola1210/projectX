import { useEffect, useReducer, useState } from "react"
import instance from "../axios/axios.config"


const initialState = {
    isLoading : false,
    error : null,
    data : null
}

const reducer = (state, action) => {
    switch (action.type){
        case "DO_SEARCH":
            return {
                ...initialState,
                isLoading : true,
            }
        
        case "SEARCH_SUCCESSED":
            return {
                ...initialState,
                data : action.payload
            }

        case "SEARCH_FAILURED":
            return {
                ...initialState,
                error : action.error
            }
        
        default:
            return initialState
    }
}

/**
 * action.type should be a string
 * action.payload should be a array of users
 * action.error should be a string of error message
 */


const useSearchUser = () => {
    const [searchState, dispatch] = useReducer(reducer, initialState)
    const [string, setString] = useState("")
    const [show, setShow] = useState(false)

    const passString = (value, cb) => {
        console.log("click ", value)
        setString(value)
        cb()
    }

    useEffect(() => {
        if(string !== ""){
            console.log("start fetch")
            setShow(false)
            dispatch({
                type : "DO_SEARCH"
            })
            instance
            .get(`/users?name=${string}`)
            .then(({ data }) => {
                console.log(data)
                setShow(true)
                setString("")
                return dispatch({
                    type : "SEARCH_SUCCESSED",
                    payload : data
                })
            })
            .catch(error => {
                console.log(error.message)
                setShow(true)
                setString("")
                return dispatch({
                    type : "SEARCH_FAILURED",
                    error : error.message
                })
            })
        }
    }, [string, dispatch, setShow])

    return [searchState, passString, show, setShow]
}

export default useSearchUser