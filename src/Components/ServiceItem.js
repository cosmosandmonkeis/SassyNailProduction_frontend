import React from 'react'
import {Card} from "semantic-ui-react";

function ServiceItem(props) {
    const {title, price, description} = props.service
    /*<Item.Image size='small' src='https://react.semantic-ui.com/images//image.png' />*/

    return (
    <Card>
        <Card.Content>
            <Card.Header as='a'>{title}</Card.Header>
            <Card.Meta> Description </Card.Meta>
            <Card.Description> {description} </Card.Description>
            <Card.Meta> Price </Card.Meta>
            <Card.Description> Starting ${price} </Card.Description>
        </Card.Content>
    </Card>
)
}

export default ServiceItem
