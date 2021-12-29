import React, {useState} from 'react'
import {useMutation, useQuery} from "@apollo/client";
import gql from 'graphql-tag'
import {Button, Dropdown, Header} from "semantic-ui-react";
import {FETCH_SERVICES_QUERY} from "./ServiceGroup";

function AdminServiceGroup() {

    const [itemSelected, setItemSelected] = useState('')

    const {data: {getServices: services} = {}} =
        useQuery(FETCH_SERVICES_QUERY)

    const [deleteService] = useMutation(DELETE_SERVICE,
        {
            update(_) {
                window.location.reload()
            },
            onError(e) {
                console.log(e)
            },
            variables: {
                serviceID: itemSelected
            }
        })

    const setDeletedItem = (event) => {
        event.preventDefault()
        setItemSelected(event.currentTarget.getAttribute('data_index'))
    }

    const serviceOptions = services && services.map(service => (
            {
                key: service.id,
                data_index: service.id,
                text: service.title + ' $' + service.price,
                description: service.description,
                onClick: setDeletedItem
            }
        ))

    return (
        <div>
            <Header>
                Selected item: {itemSelected}
            </Header>
            <Dropdown inline text='Select Service to Delete'
                      scrolling
                      options={serviceOptions}
            />
            <Button
                primary
                content='Delete Selected Service'
                onClick={deleteService}
            />
        </div>
    )
}

const DELETE_SERVICE = gql`
    mutation deleteService(
        $serviceID: ID!
    )
    {
        deleteService(serviceID: $serviceID)
        {
            id
            title
            price
            description
            category
        }
    }
`

export default AdminServiceGroup
