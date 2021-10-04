import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Loading from '../components/Loading';

function PrivateRoute({ component : Component, ...rest }) {
    const { isLoading, user } = useSelector(state => state.session)

    return (
        <Route { ...rest }>
            {
                isLoading ? 
                (<Loading />) :
                (
                    user ? 
                    <Component /> : 
                    <Redirect to={{
                        pathname : "/login",
                        state : { from : location }
                    }} />
                )
            }
        </Route>
    );
}

export default PrivateRoute;