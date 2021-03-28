import React, {useState} from 'react'
import gql from "graphql-tag";
import {useMutation} from "@apollo/client";
import {Button, Dropdown, Form, Grid, Modal} from "semantic-ui-react";
import {useForm} from "../util/hooks";


function AddOrEditService() {

    const initialState = {
        title: '',
        price: 0.0,
        description: ''
    }

    const catOptions = [
        {
            key: 'manicures',
            text: 'manicures',
            value: 'manicures',
        },
        {
            key: 'pedicures',
            text: 'pedicures',
            value: 'pedicures',
        },
        {
            key: 'waxings',
            text: 'waxings',
            value: 'waxings',
        },
    ]

    const {onChange, onSubmit, values} = useForm(addServiceCallback, initialState)
    const [category, setCategory] = useState('')
    const [open, setOpen] = useState(false)

    const [addService, {loading}] = useMutation(ADD_SERVICE, {
        update(_, data) {
            console.log(data)
            window.location.reload()
        },
        onError(e) {
            console.log(e)
        },
        variables: {
            title: values.title,
            price: parseFloat(values.price),
            description: values.description,
            category: category
        }
    })

    const handleCategory = async (event) => {
        // console.log(event.target.innerText)
        await setCategory(event.target.innerText)
    }

    function addServiceCallback() {
        console.log(values)
        addService()
    }

    return (
        <Modal onClose={() => setOpen(false)}
               open={open}
               onOpen={() => {
                   setOpen(true)
               }}
               trigger={
                   <Grid centered>
                       <Button primary>Let's Add a Service!</Button>
                   </Grid>
               }>
            <Modal.Header>Admin Add Service!</Modal.Header>
            <Modal.Content>
                <Form onSubmit={onSubmit} className={loading ? 'loading' : ''}>
                    <Form.Input
                        label='title'
                        placeholder='title...'
                        name='title'
                        value={values.title}
                        onChange={onChange}
                    />
                    <Form.Input
                        label='price'
                        placeholder='price...'
                        name='price'
                        value={values.price}
                        onChange={onChange}
                    />
                    <Form.Input
                        label='description'
                        placeholder='description...'
                        name='description'
                        value={values.description}
                        onChange={onChange}
                    />
                    <Dropdown
                        placeholder='Select Friend'
                        fluid
                        selection
                        clearable
                        onChange={handleCategory}
                        options={catOptions}
                    />
                    <Button
                        type='submit' primary
                        labelPosition='right'
                        icon='checkmark'
                        content="Add this service!"/>
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

const ADD_SERVICE =
gql`
    mutation addService
    (
        $title : String,
        $price: Float,
        $description: String,
        $category: String
    )
    {
        addService(serviceInput: {
            title: $title,
            price: $price,
            description: $description,
            category: $category}
        )
        {
            id
            title
            price
            description
            category
            date
        }
    }
`


export default AddOrEditService
