import React, {useContext} from 'react'
import MakeAppointmentModal from "./MakeAppointmentModal";
import AppointmentCardGroup from "./AppointmentCardGroup";
import {Header, HeaderSubheader, Icon, Segment} from "semantic-ui-react";
import {AuthContext} from "../context/auth";
import {useQuery} from "@apollo/client";
import gql from "graphql-tag";


function AuthAppointment({props}) {

    const {user} = useContext(AuthContext)

    const {loading, data: {getUserBookingsHistory: bookings} = {}} =
        useQuery(FETCH_USER_APP_BOOKINGS, {variables: {username: user ? user.username : ''}})

    return (
        <div>
            <Segment placeholder color='blue'>
                <Header icon textAlign='center'>
                    <Icon name='clock'/>
                    <Header.Content>
                        Times Available For Bookings!
                    </Header.Content>
                    <HeaderSubheader>
                        Monday - Sunday: 10:00 AM to  6:00 PM
                    </HeaderSubheader>
                </Header>
            </Segment>
            <div className='form-container'>
                <MakeAppointmentModal props={props}/>
                <Header as='h2' textAlign='center'>
                    Your past bookings listed here
                </Header>
                <AppointmentCardGroup
                    loading_bookings={loading}
                    bookings={bookings}
                />
            </div>
        </div>
    )
}

const FETCH_USER_APP_BOOKINGS =
gql`
    query getUserBookingsHistory
    {
        getUserBookingsHistory
        {
            createdAt
            status
            serviceType
        }
    }
`

export default AuthAppointment
