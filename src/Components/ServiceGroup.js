import React, {useState} from 'react'
import gql from 'graphql-tag'
import {useQuery} from "@apollo/client";
import {CardGroup, Dimmer, Loader, Menu, MenuItem} from "semantic-ui-react";
import ServiceItem from "./ServiceItem";

export const FETCH_SERVICES_QUERY =
gql`{
    getServices
    {
        id
        title
        price
        description
        category
    }
}
`

/*
* Since we have relatively small amount of services, fetch all services and
* dynamically render service items based on changes on the selections we made
* in small service menu
* */
function ServiceGroup() {

    const {loading, data} =
        useQuery(FETCH_SERVICES_QUERY)

    const [activeItem, setActiveItem] = useState('manicures')

    const handleItemClick = (e, {name}) => {
        setActiveItem(name)
    }

    if (loading)
        return (
            <Dimmer active>
                <Loader/>
            </Dimmer>
        )

    return (
        <div className="form-container">
            <div className='menu-center'>
                <Menu secondary pointing compact>
                    <MenuItem
                        name='manicures'
                        active={activeItem === 'manicures'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='pedicures'
                        active={activeItem === 'pedicures'}
                        onClick={handleItemClick}
                    />
                    <MenuItem
                        name='waxings'
                        active={activeItem === 'waxings'}
                        onClick={handleItemClick}
                    />
                </Menu>
            </div>
            <CardGroup centered>
                {
                    data.getServices &&
                    data.getServices.filter(service => (
                        service.category === activeItem
                    )).map(service => (
                        <ServiceItem className='item-center' service={service} activeItem={activeItem}
                                     key={service.id}/>
                    ))
                }
            </CardGroup>
        </div>
    )
}

export default ServiceGroup
