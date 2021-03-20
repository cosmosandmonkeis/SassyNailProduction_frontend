import React, {useContext} from 'react'
import {Card, CardContent, Dimmer, Loader} from 'semantic-ui-react'
import {useQuery} from "@apollo/client";
import gql from "graphql-tag";
import {AuthContext} from "../context/auth";

function AppointmentCardGroup() {

    const {user} = useContext(AuthContext)

    const {loading_bookings, data: {getUserBookingsHistory: bookings} = {}} =
        useQuery(FETCH_USER_APP_BOOKINGS, {variables: {username: user ? user.username : null}})

    return (
        <Card.Group>
            {
                loading_bookings ? (
                    <Dimmer active>
                        <Loader/>
                    </Dimmer>) : (
                    bookings &&
                    bookings.map((booking) => (
                        <Card>
                            <CardContent>
                                <Card.Header>
                                    {booking.createdAt}
                                </Card.Header>
                                <Card.Meta>
                                    {booking.confirmed.toString()}
                                </Card.Meta>
                                <Card.Description>
                                    {booking.serviceType}
                                </Card.Description>
                            </CardContent>
                        </Card>
                    ))
                )
            }
        </Card.Group>

    )
}

const FETCH_USER_APP_BOOKINGS =
gql`
    query getUserBookingsHistory($username: String!)
    {
        getUserBookingsHistory(username: $username)
        {
            createdAt
            confirmed
            serviceType
        }
    }
`

export default AppointmentCardGroup
