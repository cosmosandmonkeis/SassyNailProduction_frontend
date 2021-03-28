import React from 'react'
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import {Header} from "semantic-ui-react";
import AuthAppointmentCardGroup from "../Components/AuthAppointmentCardGroup";
import AddOrEditService from "../Components/AddOrEditService";


function Profile(props) {

    const {loading, data: {getUnconfirmedBookings: services} = {}} =
        useQuery(FETCH_UNCONFIRMED_BOOKINGS)

    return (
        <div className='form-container'>
            <Header as='h1'>
                Add a service!
            </Header>
            <AddOrEditService/>
            <Header as='h1'>
                Confirm or Deny Appointment Bookings!
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
