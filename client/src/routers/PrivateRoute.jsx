import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Loading from '../components/Loading';


//import saga actions
import { FETCH_USER_SESSION } from "../redux/session/sessionActions"

function PrivateRoute({ children, ...rest }) {
    const { isLoading, user } = useSelector(state => state.session)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type : FETCH_USER_SESSION })
    }, [])

    return (
        <Route { ...rest } render={({ location }) => 
            isLoading ? 
            (<Loading />) :
            (
                user ? 
                children : 
                <Redirect to={{
                    pathname : "/login",
                    state : { from : location }
                }} />
            )
        } />
    );
}

export default PrivateRoute;