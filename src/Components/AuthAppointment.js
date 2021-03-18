import React, {useContext} from 'react'
import gql from 'graphql-tag'
import {useQuery} from "@apollo/client";
import {AuthContext} from "../context/auth";
import {Dimmer,  Item, Loader} from "semantic-ui-react";
import MakeAppointmentModal from "./MakeAppointmentModal";


function AuthAppointment({props}) {

    const {user} = useContext(AuthContext)


    const {loading_bookings, data: {getUserBookingsHistory: bookings} = {}} =
        useQuery(FETCH_USER_APP_BOOKINGS, {variables: {username: user ? user.username : null}})

    return (
        <div>
            <div className='form-container'>
                <MakeAppointmentModal props={props}/>
                <h1> Your past bookings listed here </h1>
                <ul>
                    {
                        loading_bookings ? (
                            <Dimmer active>
                                <Loader/>
                            </Dimmer>) : (
                            bookings &&
                            bookings.map((booking, index) => (
                                <li key={index}>
                                    <Item>
                                        <Item.Content>
                                            <Item.Header as='h3'>{booking.createdAt}</Item.Header>
                                            <Item.Header as='h3'>{booking.serviceType}</Item.Header>
                                            <Item.Header as='h3'>{booking.confirmed}</Item.Header>
                                        </Item.Content>
                                    </Item>
                                </li>
                            ))
                        )
                    }
                </ul>
            </div>
        </div>
    )
}


const FETCH_USER_APP_BOOKINGS =
gql`
    query getUserBookingsHistory($username: String!)
    {
        getUserBookingsHistory(username: $username)
        {
            createdAt
            confirmed
            serviceType
        }
    }
`


export default AuthAppointment
