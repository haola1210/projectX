import { 
    createStore,
    combineReducers,
    applyMiddleware
} from "redux"
import createSagaMiddleware from "redux-saga"

import { errorReducer } from "./globalError/errorReducer"
import { sessionReducer } from "./session/sessionReducer"
import rootSaga from "../redux-middlewares/saga/rootSaga"

const rootReducer = combineReducers({
    error : errorReducer,
    session : sessionReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store