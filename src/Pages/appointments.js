import React, {useContext} from 'react'
import {AuthContext} from "../context/auth";
import Banner from "../Components/Banner";
import AuthAppointment from "../Components/AuthAppointment";
import {Header} from "semantic-ui-react";


function Appointment(props) {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner bigheader='View or Make Appointments!' subtext='Appointments need to be confirmed'/>
            {user ? <AuthAppointment props={props}/> :
                <div className='form-container'>
                    <Header size='huge'>Login first!</Header>
                </div>
            }
        </div>
    )
}

export default Appointment
