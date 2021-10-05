import { 
    START_FETCH_USER_SESSION,
    FETCH_USER_SESSION_FAILURE,
    FETCH_USER_SESSION_SUCCESS
} from "./sessionActions"


const initialState = {
    isLoading : false,
    user : null
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_USER_SESSION:
            return {
                ...initialState,
                isLoading : true
            }
        
            case FETCH_USER_SESSION_SUCCESS:
                return {
                    ...initialState,
                    user : action.payload.user
                }
            
            case FETCH_USER_SESSION_FAILURE:
                return initialState
        
        default: return state
    }
}