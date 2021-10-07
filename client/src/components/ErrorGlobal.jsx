import React , { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { CLEAR_ERROR_MESSAGE } from "../redux/globalError/errorActions"

function ErrorGlobal({ message }) {
    const dispatch = useDispatch()

    const closeError = () => dispatch({
        type : CLEAR_ERROR_MESSAGE
    })
    useEffect(() => {
        const timeOut = setTimeout(() => {
            closeError()
        }, 2000)
        return () => clearTimeout(timeOut)
    }, [])

    return (
        <span
            className="absolute top-8 cursor-pointer bg-red-600 text-gray-100 p-2 z-20 rounded "
            onClick={closeError}
        >
            {message}
        </span>
    );
}

export default ErrorGlobal;