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
            <Segment.Group>
                <Segment color='green' placeholder>
                    <Header icon textAlign='center'>
                        <Icon name='wizard'/>
                        <Header.Content>
                            Note: We close at 7:30 PM Monday - Saturdays and 6:30 PM on Sundays.
                        </Header.Content>
                        <HeaderSubheader>
                            Appointments made after the ending times below will be rejected. <br/>
                            Provide at least 24 hours notice for cancellation. <br/>
                            <b>Bonus:</b> If you made an online appointment, mention it for a $2 off coupon
                            off any service!
                        </HeaderSubheader>
                    </Header>
                </Segment>
                <Segment placeholder color='blue'>
                    <Header icon textAlign='center'>
                        <Icon name='clock'/>
                        <Header.Content>
                            Times Available For Bookings! <br/>
                        </Header.Content>
                        <HeaderSubheader>
                            Monday - Saturday: 9:30 AM to 7:00 PM <br/>
                            Sunday: 10:00 AM to 6:00 PM
                        </HeaderSubheader>
                    </Header>
                </Segment>
            </Segment.Group>
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
