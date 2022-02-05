import React, {useContext} from 'react'
import {AuthContext} from "../context/auth";
import Banner from "../Components/Banner";
import AuthAppointment from "../Components/AuthAppointment";
import {Header, HeaderSubheader, Icon, Segment} from "semantic-ui-react";


function Appointment(props) {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner bigheader='Login to Make Appointments!'
                    subtext='Call 510-596-8802 for any inquiries. '/>
            {
                user ? <AuthAppointment props={props}/> :
                    <div>
                        <Segment.Group>
                            <Segment color='green'>
                                <Header icon textAlign='center'>
                                    <Icon name='wizard'/>
                                    <Header.Content>
                                        Note: We close at 7:30 PM Monday - Saturdays and 6:30 PM on Sundays.
                                    </Header.Content>
                                    <HeaderSubheader>
                                        Appointments made after the ending times below will be rejected. <br/>
                                        Provide at least 24 hours notice for cancellation. <br/>
                                        <b>Bonus:</b> If you made an online appointment, mention it for a $2 off coupon
                                        off any service!
                                    </HeaderSubheader>
                                </Header>
                            </Segment>
                            <Segment placeholder color='blue'>
                                <Header icon textAlign='center'>
                                    <Icon name='clock'/>
                                    <Header.Content>
                                        Times Available For Bookings! <br/>
                                    </Header.Content>
                                    <HeaderSubheader>
                                        Monday - Friday: 10:00 AM to 6:00 PM <br/>
                                        Online appointments closed for Saturday and Sunday.
                                    </HeaderSubheader>
                                </Header>
                            </Segment>
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
                        </Segment.Group>
                    </div>
            }
        </div>
    )
}

export default Appointment
