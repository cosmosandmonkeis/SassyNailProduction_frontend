import React, {useContext} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {AuthContext} from "../context/auth";

function AdminRoute({component: Component, ...rest}) {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <Route
                {...rest}
                render={props =>
                    (user && user.admin === true) ? <Component {...props} /> : <Redirect to='/'/>}
            />
        </div>
    )
}

export default AdminRoute
