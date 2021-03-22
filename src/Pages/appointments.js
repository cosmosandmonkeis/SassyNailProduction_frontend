import React, {useContext} from 'react'
import {AuthContext} from "../context/auth";
import Banner from "../Components/Banner";
import AuthAppointment from "../Components/AuthAppointment";
import {Header, Icon, Segment} from "semantic-ui-react";


function Appointment(props) {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner bigheader='View or Make Appointments!' subtext='Appointments need to be confirmed'/>
            {user ? <AuthAppointment props={props}/> :
                <Segment placeholder>
                    <Header icon>
                        <Icon name='bullhorn' />
                        Login First to Make or View Appointments!
                    </Header>
                </Segment>
            }
        </div>
    )
}

export default Appointment
