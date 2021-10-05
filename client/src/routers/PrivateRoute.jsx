import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Loading from '../components/Loading';

function PrivateRoute({ children, ...rest }) {
    const { isLoading, user } = useSelector(state => state.session)

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