import React from 'react'
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import AppointmentCardGroup from "../Components/AppointmentCardGroup";
import {Header} from "semantic-ui-react";


function Profile() {

    const {loading, data: {getUnconfirmedBookings: services} = {}} =
        useQuery(FETCH_UNCONFIRMED_BOOKINGS)

    return (
        <div className='form-container'>
            <Header as='h1'>
                Profile Page
            </Header>
            <AppointmentCardGroup
                loading_bookings={loading} bookings={services}
            />
        </div>
    )
}

const FETCH_UNCONFIRMED_BOOKINGS =
gql`
    query {
        getUnconfirmedBookings {
            createdAt
            serviceType
            status
        }
    }
`


export default Profile
