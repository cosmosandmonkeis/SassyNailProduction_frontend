import React, {useState} from 'react'
import {useMutation, useQuery} from "@apollo/client";
import gql from 'graphql-tag'
import {Header, Dropdown, Button} from "semantic-ui-react";
import {FETCH_SERVICES_QUERY} from "./ServiceGroup";

function AdminServiceGroup() {

    const [itemSelected, setItemSelected] = useState('')

    const { data: {getServices: services} = {}} =
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
        setItemSelected(event.target.getAttribute('data-index'))
    }

    return (
        <div>
            <Header>
                Selected item: {itemSelected}
            </Header>
            <Dropdown selection fluid text='Select Service to Delete'>
                <Dropdown.Menu>
                    {
                        services && services.map(service => (
                            <Dropdown.Item
                                key={service.id}
                                data-index={service.id}
                                text={service.title + ' $' + service.price}
                                description={service.description}
                                onClick={setDeletedItem}
                            />
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
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
