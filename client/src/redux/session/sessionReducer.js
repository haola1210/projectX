import { 
    STORE_ACCESS_TOKEN,
    CLEAR_ACCESS_TOKEN    
} from "./sessionActions"


const initialState = {
    accessToken : null,
    isLoading : false,
    user : null
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_ACCESS_TOKEN: 
            return {
                ...state,
                accessToken : action.payload.accessToken
            }
        
        case CLEAR_ACCESS_TOKEN:
            return {
                ...state,
                accessToken : null
            }
        
        default: return state
    }
}