import React, { useState} from 'react'
import gql from "graphql-tag";
import {Button, Table} from "semantic-ui-react";
import {useMutation} from "@apollo/client";
const moment_timezone = require('moment-timezone');


function SpecialTableRow({ id, createdAt, status, serviceType}) {

    const [newStatus, setNewStatus] = useState(status)

    const [updateAppBooking] = useMutation(UPDATE_APPOINTMENT_STATUS, {
        variables : {
            appointmentID: id,
            newStatus: newStatus
        }
    })

    const handleApprove = async () => {
        // event.preventDefault()
        await setNewStatus('confirmed')
        callUpdate()
    }

    const handleDecline = async () => {
        // event.preventDefault()
        await setNewStatus('denied')
        callUpdate()
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
                {moment_timezone.tz(createdAt, 'America/Los_Angeles').format("LLL")}
            </Table.Cell>
            <Table.Cell>
                {newStatus}
            </Table.Cell>
            <Table.Cell>
                {serviceType}
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
        $newStatus: String!
    )
    {
        updateAppointmentBooking(appointmentID: $appointmentID, newStatus: $newStatus ) {
            id
            createdAt
            serviceType
            status
        }
    }
`

export default SpecialTableRow
