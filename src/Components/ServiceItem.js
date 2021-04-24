import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardMeta} from "semantic-ui-react";

function ServiceItem(props) {
    const {title, description, price} = props.service

    return (
        <Card>
            <CardContent>
                <CardHeader as='a'>{title}</CardHeader>
                <span>
                    <CardMeta> Price </CardMeta>
                    <CardDescription> Starting ${price} </CardDescription>
                    <CardMeta> Description </CardMeta>
                    <CardDescription> {description} </CardDescription>
                </span>
            </CardContent>
        </Card>
    )
}

export default ServiceItem
