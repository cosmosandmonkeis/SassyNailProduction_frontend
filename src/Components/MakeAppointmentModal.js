import React from 'react'
import {Button, Form, Modal} from "semantic-ui-react";
import {useMutation} from "@apollo/client";
import {useForm} from "../util/hooks";
import gql from "graphql-tag";

function CreateAppointmentModal({props}) {

    const [open, setOpen] = React.useState(false)

    const initialState = {
        description: ''
    }

    const {onChange, onSubmit, values} = useForm(createAppointmentCallback, initialState)

    const [sendAppointMutation, {loading_create}] = useMutation(MAKE_APP_BOOKING, {
        update(_) {
            props.history.push('/success')
        },
        variables: values
    })


    function createAppointmentCallback() {
        sendAppointMutation()
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button primary>Let's make an appointment!</Button>}
        >
            <Modal.Header>Make an appointment!</Modal.Header>
            <Modal.Content>
                <Form onSubmit={onSubmit} noValidate className={loading_create ? 'loading' : ''}>
                    <h1> Make a new booking! </h1>
                    <Form.Input
                        label='description'
                        placeholder='description...'
                        name='description'
                        value={values.description}
                        onChange={onChange}
                    />
                    <Button type='submit' primary
                            labelPosition='right'
                            icon='checkmark'
                            content="Create Appointment Booking!"
                    />
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

const MAKE_APP_BOOKING =
gql`
    mutation createAppointmentBooking($description : String!)
    {
        createAppointmentBooking(description: $description)
        {
            id
            createdAt
            confirmed
            serviceType
        }
    }
`

export default CreateAppointmentModal
