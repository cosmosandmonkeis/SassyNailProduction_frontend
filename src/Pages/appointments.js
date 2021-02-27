import React, {useContext} from 'react'
import {AuthContext} from "../context/auth";
import Banner from "../Components/Banner";
import AuthAppointment from "../Components/AuthAppointment";


function Appointment(props) {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner bigheader='View or Make Appointments!' subtext='Appointments need to be confirmed'/>
            {user ? <AuthAppointment props={props}/> : <h1>Login first!</h1>}
        </div>
    )
}

export default Appointment