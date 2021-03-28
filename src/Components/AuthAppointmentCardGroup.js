import React, {useState, useEffect} from 'react'
import {
    Dimmer,
    Header,
    HeaderSubheader,
    Icon,
    Loader,
    Segment,
    Table
} from 'semantic-ui-react'
import SpecialTableRow from "./SpecialTableRow";


function AuthAppointmentCardGroup({loading_bookings, bookings, props}) {

    const [state_bookings, setState_bookings] = useState([])

    useEffect(() => {
        setState_bookings(bookings)
    }, [bookings])

    return (bookings && bookings.length === 0) ? (
        <Segment color='red'>
            <Header icon textAlign='center'>
                <Icon name='bullhorn'/>
                <Header.Content>
                    No appointments to confirm!
                </Header.Content>
                <HeaderSubheader>
                    Refresh to see more appointments made!
                </HeaderSubheader>
            </Header>
        </Segment>
    ) : (
        loading_bookings ? (
                <Dimmer active>
                    <Loader/>
                </Dimmer>
            ) :
            (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Index</Table.HeaderCell>
                            <Table.HeaderCell>Date Created</Table.HeaderCell>
                            <Table.HeaderCell>Confirmation Status</Table.HeaderCell>
                            <Table.HeaderCell>Service Appointment Description</Table.HeaderCell>
                            <Table.HeaderCell>Approve</Table.HeaderCell>
                            <Table.HeaderCell>Deny</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            state_bookings && state_bookings.map(
                                (booking, index) => (
                                    <SpecialTableRow
                                        key={index}
                                        id={booking.id}
                                        createdAt={booking.createdAt}
                                        status={booking.status}
                                        serviceType={booking.serviceType}
                                        props={props}
                                    />
                                )
                            )
                        }
                    </Table.Body>
                </Table>
            )
    )
}


export default AuthAppointmentCardGroup
