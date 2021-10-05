import { takeLatest, put } from "redux-saga/effects"
import { PrivateApiInstance } from "../../axios/axios.config"

import { 
    FETCH_USER_SESSION,
    START_FETCH_USER_SESSION,
    FETCH_USER_SESSION_SUCCESS,
    FETCH_USER_SESSION_FAILURE
} from "../../redux/session/sessionActions"

function * workerFetchSession(){
    try {
        // start fetch 
        yield put({ type : START_FETCH_USER_SESSION })
        const { data } = yield PrivateApiInstance.get("/user/user-info")

        console.log(data)
        //fetch success
        yield put({
            type : FETCH_USER_SESSION_SUCCESS,
            payload : {
                user : data.user
            }
        })

    } catch (error) {
        console.log("err in saga: ", error.message)
        yield put({
            type : FETCH_USER_SESSION_FAILURE,
            payload : { errorMessage : error.message }
        })
        // then put logout here...
        //....
    }
}

export function* watchSession(){
    //yield all worker here ....
    yield takeLatest(FETCH_USER_SESSION, workerFetchSession)
}