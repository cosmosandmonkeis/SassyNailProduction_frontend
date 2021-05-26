import React, {useState} from 'react'
import {Button, Form, FormInput, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import {useMutation} from "@apollo/client";
import gql from "graphql-tag";
import {DateTimeInput} from "semantic-ui-calendar-react";
import moment from 'moment'
import DisplayErrorGroup from "./DisplayErrorGroup";
import {useForm} from "../util/hooks";

function CreateAppointmentModal() {

    const initialState = {
        name: '',
        phonenum: '',
        size: 1,
        services: ''
    }

    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})

    const {onChange, onSubmit, values} = useForm(sendCallBack, initialState)
    const [date, setDate] = useState('')

    const handleDateChange = (_, value) => {
        setDate(value)
    }

    const [sendAppointMutation, {loading_create}] = useMutation(MAKE_APP_BOOKING, {
        update(_) {
            window.location.reload(true)
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {
            description: `Name:${values.name} Phone:${values.phonenum} Size:${values.size} Description:${values.services} `,
            serviceDate: date
        }
    })

    function sendCallBack() {
        console.log()
        sendAppointMutation()
    }

    return (
        <Modal onClose={() => setOpen(false)}
               open={open}
               onOpen={() => {
                   setDate('')
                   setOpen(true)
               }}
               trigger={
                   <Button primary fluid>Let's make an appointment!</Button>
               }>
            <ModalHeader>Make an appointment!</ModalHeader>
            <ModalContent>
                <Form onSubmit={onSubmit} className={loading_create ? 'loading' : ''}>
                    <FormInput
                        label='Name'
                        placeholder='Name(s) of Party Members'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        required
                    />
                    <FormInput
                        label='10 Digit Phone Number'
                        placeholder='10 Digit Phone Number to Call Back Example: 510 123 4567'
                        name='phonenum'
                        value={values.phonenum}
                        onChange={onChange}
                        required
                    />
                    <FormInput
                        label='Party Size'
                        placeholder='Party Size'
                        name='size'
                        value={values.size}
                        onChange={onChange}
                        required
                    />
                    <FormInput
                        label='Services'
                        placeholder='Services requested'
                        name='services'
                        value={values.services}
                        onChange={onChange}
                        required
                    />
                    <DateTimeInput
                        name="date"
                        dateTimeFormat="LLLL"
                        timeFormat="AMPM"
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
                        content="Create Appointment Booking!"
                    />
                </Form>
                <DisplayErrorGroup errors={errors}/>
            </ModalContent>
            <ModalActions>
                <Button color='black' onClick={() => setOpen(false)}>
                    I change my mind!
                </Button>
            </ModalActions>
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
