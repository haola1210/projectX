import { 
    createStore,
    combineReducers,
    applyMiddleware
} from "redux"

import { errorReducer } from "./globalError/errorReducer"
import { sessionReducer } from "./session/sessionReducer"

const rootReducer = combineReducers({
    error : errorReducer,
    session : sessionReducer,
})

const store = createStore(rootReducer)

export default store