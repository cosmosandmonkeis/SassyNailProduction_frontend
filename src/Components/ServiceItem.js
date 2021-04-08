import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardMeta} from "semantic-ui-react";

function ServiceItem(props) {
    const {title, price, description} = props.service

    return (
        <Card>
            <CardContent>
                <CardHeader as='a'>{title}</CardHeader>
                <CardMeta> Description </CardMeta>
                <CardDescription> {description} </CardDescription>
                <CardMeta> Price </CardMeta>
                <CardDescription> Starting ${price} </CardDescription>
            </CardContent>
        </Card>
    )
}

export default ServiceItem
