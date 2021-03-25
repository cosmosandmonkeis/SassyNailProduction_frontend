import React from 'react'
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import AppointmentCardGroup from "../Components/AppointmentCardGroup";


function Profile() {

    const {loading, data: {getUnconfirmedBookings: services} = {}} =
        useQuery(FETCH_UNCONFIRMED_BOOKINGS)

    return (
        <div className='form-container'>
            <h1>
                Profile Page
            </h1>
            <AppointmentCardGroup loading_bookings={loading}
                                  bookings={services} />
        </div>
    )
}

const FETCH_UNCONFIRMED_BOOKINGS =
gql`
    query {
        getUnconfirmedBookings {
            createdAt
            serviceType
            confirmed
        }
    }
`


export default Profile
