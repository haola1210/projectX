import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Loading from "../components/Loading"

function PublicRoute({ component : Component, ...rest }) {
    const { isLoading, user } = useSelector(state => state.session)

    return (
        <Route {...rest}>
            {
                isLoading ? 
                ( <Loading /> ) :
                (
                    user === null ?
                    <Component /> : 
                    <Redirect to={{
                        pathname : "/",
                        state : { from : location }
                    }} />
                )
            }
        </Route>
    );
}

export default PublicRoute;