import React, {useState} from 'react'
import {Button, Form, Modal} from "semantic-ui-react";
import {useMutation} from "@apollo/client";
import gql from "graphql-tag";
import {DateTimeInput} from "semantic-ui-calendar-react";
import moment from 'moment'
import DisplayErrorGroup from "./DisplayErrorGroup";

function CreateAppointmentModal({props}) {

    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})

    const [descriptionVal, setDescriptionVal] = useState('')
    const [date, setDate] = useState('')

    const onChange = (event) => {
        setDescriptionVal(event.target.value)
    }

    const handleDateChange = (_, value) => {
        const iso_val = moment().toISOString(value)
        setDate(iso_val)
    }

    const onSubmit = event => {
        event.preventDefault()
        sendAppointMutation()
    }

    const [sendAppointMutation, {loading_create}] = useMutation(MAKE_APP_BOOKING, {
        update(_) {
            props.history.push('/success')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {
            description: descriptionVal,
            serviceDate: date
        }
    })

    return (
        <Modal onClose={() => setOpen(false)}
               open={open}
               onOpen={() => {
                   setDescriptionVal('')
                   setDate('')
                   setOpen(true)
               }}
               trigger={
                       <Button primary fluid>Let's make an appointment!</Button>
               }>
            <Modal.Header>Make an appointment!</Modal.Header>
            <Modal.Content>
                <Form onSubmit={onSubmit} className={loading_create ? 'loading' : ''}>
                    <Form.Input
                        label='description'
                        placeholder='description...'
                        name='description'
                        value={descriptionVal}
                        error={!!errors.description}
                        onChange={onChange}
                    />
                    <DateTimeInput
                        name="date"
                        value={date}
                        minDate={moment()}
                        maxDate={moment().add(1, 'month')}
                        onChange={(a, {name, value}) => handleDateChange(name, value)}
                        error={!!errors.dateString}
                    />
                    <Button
                        type='submit' primary
                        labelPosition='right'
                        icon='checkmark'
                        content="Create Appointment Booking!"/>
                </Form>
                <DisplayErrorGroup errors={errors}/>

            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    I change my mind!
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

const MAKE_APP_BOOKING = gql`
    mutation createAppointmentBooking(
        $description : String!
        $serviceDate : String!
    )
    {
        createAppointmentBooking(
            description : $description
            serviceDate : $serviceDate
        )
        {
            id
            createdAt
            status
            serviceType
        }
    }
`

export default CreateAppointmentModal
