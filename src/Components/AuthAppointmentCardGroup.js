import React, {useEffect, useState} from 'react'
import {
    Dimmer,
    Header,
    HeaderContent,
    HeaderSubheader,
    Icon,
    Loader,
    Segment,
    Table,
    TableHeader,
    TableHeaderCell,
    TableRow
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
                <HeaderContent>
                    No appointments to confirm!
                </HeaderContent>
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
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Index</TableHeaderCell>
                            <TableHeaderCell>Date Created</TableHeaderCell>
                            <TableHeaderCell>Confirmation Status</TableHeaderCell>
                            <TableHeaderCell>Service Appointment Description</TableHeaderCell>
                            <TableHeaderCell>Approve</TableHeaderCell>
                            <TableHeaderCell>Deny</TableHeaderCell>
                            <TableHeaderCell>Message</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
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
                                        adminMessage={booking.adminMessage}
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
