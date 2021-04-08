import React from 'react'
import gql from "graphql-tag";
import {Header} from "semantic-ui-react";
import {useQuery} from "@apollo/client";
import AppointmentCardGroup from "../Components/AppointmentCardGroup";


function AdminOnlyViewAllBookings() {

    const {loading, data: {getAppointmentBookings: services} = {}} =
        useQuery(FETCH_BOOKINGS)

    return (
        <div className='form-container'>
            <Header as='h1'>
                View All Bookings Page
            </Header>
            <AppointmentCardGroup
                loading_bookings={loading} bookings={services}
            />
        </div>
    )
}

const FETCH_BOOKINGS =
gql`
    query {
        getAppointmentBookings
        {
            id
            createdAt
            serviceType
            status
        }
    }
`


export default AdminOnlyViewAllBookings
