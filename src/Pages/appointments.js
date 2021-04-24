import React, {useContext} from 'react'
import {AuthContext} from "../context/auth";
import Banner from "../Components/Banner";
import AuthAppointment from "../Components/AuthAppointment";
import {Header, HeaderSubheader, Icon, Segment} from "semantic-ui-react";


function Appointment(props) {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner bigheader='Appointments Feature Under Testing!'
                    subtext='Appointments need to be confirmed by administrators.
                               Call 510-596-8802 for any inquiries.
                               '/>
            {
                user ? <AuthAppointment props={props}/> :
                    <div>
                        <Segment placeholder color='red'>
                            <Header icon textAlign='center'>
                                <Icon name='bullhorn'/>
                                <Header.Content>
                                    Login first to Make or View Appointments!
                                </Header.Content>
                                <HeaderSubheader>
                                    Register an account if you haven't already!
                                </HeaderSubheader>
                            </Header>
                        </Segment>
                    </div>
            }
        </div>
    )
}

export default Appointment
