import {
    STORE_ERROR_MESSAGE,
    CLEAR_ERROR_MESSAGE
} from "./errorActions"

const initialState = {
    errorMessage: null
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_ERROR_MESSAGE:
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
