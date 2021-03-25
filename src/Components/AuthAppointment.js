import React, {useContext} from 'react'
import MakeAppointmentModal from "./MakeAppointmentModal";
import AppointmentCardGroup from "./AppointmentCardGroup";
import {Header} from "semantic-ui-react";
import {AuthContext} from "../context/auth";
import {useQuery} from "@apollo/client";
import gql from "graphql-tag";


function AuthAppointment({props}) {

    const {user} = useContext(AuthContext)

    const {loading_bookings, data: {getUserBookingsHistory: bookings} = {}} =
        useQuery(FETCH_USER_APP_BOOKINGS, {variables: {username: user ? user.username : null}})

    return (
        <div>
            <div className='form-container'>
                <MakeAppointmentModal props={props}/>
                <Header as='h2' textAlign='center'>
                    Your past bookings listed here
                </Header>
                <AppointmentCardGroup loading_bookings={loading_bookings}
                                      bookings={bookings} />
            </div>
        </div>
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

export default AuthAppointment
