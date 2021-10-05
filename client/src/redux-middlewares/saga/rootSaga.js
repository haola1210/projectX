import { all } from 'redux-saga/effects'
//import all watcher here...
import { watchSession } from "./sessionSaga"

export default function* rootSaga(){
    yield all([
        //saga watcher here...
        watchSession()
    ])
}