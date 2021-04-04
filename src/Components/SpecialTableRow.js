import React, {useState} from 'react'
import gql from "graphql-tag";
import {Button, Dropdown, Header, Table, TableCell} from "semantic-ui-react";
import {useMutation} from "@apollo/client";



function SpecialTableRow({id, createdAt, status, serviceType, adminMessage}) {

    const messageOptions = [
        {
            key: 'Confirmed!',
            text: 'Appointment Confirmed, see you then!',
            value: 'Appointment Confirmed, see you then!',
        },
        {
            key: 'Denied! (Time)',
            text: 'Appointment time not available, make a new appointment!',
            value: 'Appointment time not available, make a new appointment!',
        },
        {
            key: 'Denied! (Other)',
            text: 'Appointment not able to be scheduled, call 510-596-8802 for further information',
            value: 'Appointment  not able to be scheduled, call 510-596-8802 for further information',
        },
    ]

    const [newStatus, setNewStatus] = useState(status)
    const [modifiedMessage, setAdminMessage] = useState(adminMessage)

    const [updateAppBooking] = useMutation(UPDATE_APPOINTMENT_STATUS, {
        variables: {
            appointmentID: id,
            newStatus: newStatus,
            adminMessage: modifiedMessage
        }
    })

    const handleApprove = async () => {
        await setNewStatus('confirmed')
        callUpdate()
    }

    const handleDecline = async () => {
        await setNewStatus('denied')
        callUpdate()
    }

    const handleCategory = async (event) => {
        await setAdminMessage(event.target.innerText)
    }

    function callUpdate() {
        console.log({
            appointmentID: id,
            newStatus: newStatus
        })
        updateAppBooking()
    }

    return (
        <Table.Row>
            <Table.Cell>
                {id}
            </Table.Cell>
            <Table.Cell>
                {createdAt}
            </Table.Cell>
            {
                newStatus === 'unconfirmed' ?
                    <TableCell>
                        <Header as='h4' color='grey'>
                            {newStatus}
                        </Header>
                    </TableCell>
                    :
                    (
                        newStatus === 'denied' ?
                            <TableCell>
                                <Header as='h4' color='red'>
                                    {newStatus}
                                </Header>
                            </TableCell>
                            :
                            <TableCell>
                                <Header as='h4' color='green'>
                                    {newStatus}
                                </Header>
                            </TableCell>
                    )
            }
            <Table.Cell>
                {serviceType}
            </Table.Cell>
            <Table.Cell>
                <Dropdown
                    placeholder='Select a category'
                    fluid
                    selection
                    clearable
                    onChange={handleCategory}
                    options={messageOptions}/>
            </Table.Cell>
            <Table.Cell>
                <Button content='Approve' onClick={handleApprove} positive/>
            </Table.Cell>
            <Table.Cell>
                <Button content='Deny' onClick={handleDecline} negative/>
            </Table.Cell>
        </Table.Row>
    )
}

const UPDATE_APPOINTMENT_STATUS =
gql`
    mutation updateAppointmentBooking(
        $appointmentID: ID!,
        $newStatus: String!,
        $adminMessage: String!
    )
    {
        updateAppointmentBooking(appointmentID: $appointmentID, newStatus: $newStatus, adminMessage: $adminMessage) {
            id
            createdAt
            serviceType
            status
            adminMessage
        }
    }
`

export default SpecialTableRow
