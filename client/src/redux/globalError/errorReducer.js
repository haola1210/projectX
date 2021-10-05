import {
    STORE_ERROR_MESSAGE,
    CLEAR_ERROR_MESSAGE
} from "./errorActions"
import { FETCH_USER_SESSION_FAILURE } from "../session/sessionActions"

const initialState = {
    errorMessage: null
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_ERROR_MESSAGE:
        case FETCH_USER_SESSION_FAILURE:
            return {
                errorMessage: action.payload.errorMessage
            }
            
        case CLEAR_ERROR_MESSAGE:
            return {
                errorMessage: null
            }
        default: return state
    }
}
