import React from 'react'
import MakeAppointmentModal from "./MakeAppointmentModal";
import AppointmentCardGroup from "./AppointmentCardGroup";


function AuthAppointment({props}) {


    return (
        <div>
            <div className='form-container'>
                <MakeAppointmentModal props={props}/>
                <h1> Your past bookings listed here </h1>
                <AppointmentCardGroup />
            </div>
        </div>
    )
}

export default AuthAppointment
