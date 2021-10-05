import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Loading from "../components/Loading"

function PublicRoute({ children, ...rest }) {
    const { isLoading, user } = useSelector(state => state.session)
    
    console.log("in route", isLoading, user)
    
    return (
        <Route {...rest} render = {
            ({ location }) => 
                isLoading ? 
                ( <Loading /> ) :
                (
                    user === null ?
                    children : 
                    <Redirect to={{
                        pathname : "/",
                        state : { from : location }
                    }} />
                )
        }/>
    );
}

export default PublicRoute;