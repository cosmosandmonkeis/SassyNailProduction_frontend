import React, {useState} from 'react'
import {Button, Form, Modal, Grid} from "semantic-ui-react";
import {useMutation} from "@apollo/client";
import gql from "graphql-tag";
import {DateTimeInput} from "semantic-ui-calendar-react";
import moment from 'moment'

function CreateAppointmentModal({props}) {

    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})

    const initialState = {
        description: '',
        serviceDate: ''
    }
    const [values, setValues] = useState(initialState)

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        sendAppointMutation()
    }

    function handleDateChange(name, value) {
        const iso_val = moment().toISOString(value)
        setValues({...values, serviceDate:iso_val})
    }

    const [sendAppointMutation, {loading_create}] = useMutation(MAKE_APP_BOOKING, {
        update(_) {
            props.history.push('/success')
        },
        onError(err) {
            console.log(err.name)
            // setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    return (
        <Modal onClose={() => setOpen(false)}
               open={open}
               onOpen={() => {
                   setValues({})
                   setOpen(true)
               }}
               trigger={
                   <Grid centered>
                       <Button primary>Let's make an appointment!</Button>
                   </Grid>
               }>
            <Modal.Header>Make an appointment!</Modal.Header>
            <Modal.Content>
                <Form onSubmit={onSubmit} noValidate className={loading_create ? 'loading' : ''}>
                    <Form.Input
                        label='description'
                        placeholder='description...'
                        name='description'
                        value={values.description}
                        error={!!errors.description}
                        onChange={onChange}
                    />
                    <DateTimeInput
                        name="date"
                        value={values.serviceDate}
                        minDate={moment()}
                        maxDate={moment().add(1, 'month')}
                        onChange={(a, {name, value}) => handleDateChange(name, value)}
                        // error={!!errors.dateString}
                    />
                    <Button
                        type='submit' primary
                        labelPosition='right'
                        icon='checkmark'
                        content="Create Appointment Booking!"/>
                </Form>
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
            confirmed
            serviceType
        }
    }
`

export default CreateAppointmentModal
