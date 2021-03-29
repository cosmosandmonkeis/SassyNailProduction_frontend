import React, {useState} from 'react'
import {useQuery} from "@apollo/client";
import gql from 'graphql-tag'
import {Item, Menu, Loader, Dimmer} from "semantic-ui-react";

import ServiceItem from "../Components/ServiceItem";

/*
* Since we have relatively small amount of services, fetch all services and
* dynamically render service items based on changes on the selections we made
* in small service menu
* */
function ServiceGroup() {

    const {loading, data: {getServices: services} = {}} =
        useQuery(FETCH_SERVICES_QUERY)

    const [activeItem, setActiveItem] = useState('manicures')

    const handleItemClick = (e, {name}) => {
        setActiveItem(name)
    }

    return (
        <div className="form-container ">
            <div className='menu-center'>
                <Menu secondary pointing compact>
                    <Menu.Item
                        name='manicures'
                        active={activeItem === 'manicures'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='pedicures'
                        active={activeItem === 'pedicures'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='waxings'
                        active={activeItem === 'waxings'}
                        onClick={handleItemClick}
                    />
                </Menu>
            </div>
            <Item.Group>
                {
                    loading ? (
                        <Dimmer active>
                            <Loader/>
                        </Dimmer>
                    ) : (
                        services &&
                        services.filter(service => (
                            service.category === activeItem
                        )).map(service => (
                            <ServiceItem className='item-center' service={service} activeItem={activeItem}
                                         key={service.id}/>
                        ))
                    )
                }
            </Item.Group>
        </div>
    )
}

const FETCH_SERVICES_QUERY =
gql`{
    getServices {
        id
        title
        price
        description
        category
    }
}`

export default ServiceGroup
