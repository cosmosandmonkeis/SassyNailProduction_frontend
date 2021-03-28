import React from 'react'
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import {Header} from "semantic-ui-react";
import AuthAppointmentCardGroup from "../Components/AuthAppointmentCardGroup";


function Profile(props) {

    const {loading, data: {getUnconfirmedBookings: services} = {}} =
        useQuery(FETCH_UNCONFIRMED_BOOKINGS)

    return (
        <div className='form-container'>
            <Header as='h1'>
                Profile Page
            </Header>
            <AuthAppointmentCardGroup
                loading_bookings={loading} bookings={services} props={props}
            />
        </div>
    )
}

const FETCH_UNCONFIRMED_BOOKINGS =
gql`
    query {
        getUnconfirmedBookings {
            id
            createdAt
            serviceType
            status
        }
    }
`


export default Profile
