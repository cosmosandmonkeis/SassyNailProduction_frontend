import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from "../context/auth";
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import {Dimmer, Loader} from "semantic-ui-react";

function AdminRoute({component: Component, ...rest}) {
    const {user} = useContext(AuthContext)

    const {loading, data: {getAUser: userData} = {}} =
        useQuery(FIND_USER_INFO, {
            variables: user ? {username: user.username} : {}
        })

    return (
        <div>
            {
                loading ? (
                        <Dimmer active>
                            <Loader/>
                        </Dimmer>
                    ) :
                    <Route
                        {...rest}
                        render={props =>
                            (userData && userData.admin === true) ? <Component {...props} /> : <Redirect to='/'/>}
                    />
            }
        </div>
    )
}

const FIND_USER_INFO = gql`
    query getAUser(
        $username: String!
    ) {
        getAUser(username: $username)
        {
            id
            username
            email
            phonenumber
            bookingsHistory {
                status
                createdAt
                serviceType
            }
            createdAt
            admin
        }
    }
`

export default AdminRoute
