import React from 'react'
import MakeAppointmentModal from "./MakeAppointmentModal";
import AppointmentCardGroup from "./AppointmentCardGroup";
import {Header} from "semantic-ui-react";


function AuthAppointment({props}) {


    return (
        <div>
            <div className='form-container'>
                <MakeAppointmentModal props={props}/>
                <Header as='h2' textAlign='center'>
                    Your past bookings listed here
                </Header>
                <AppointmentCardGroup />
            </div>
        </div>
    )
}

export default AuthAppointment
