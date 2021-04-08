import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
    CardMeta,
    Dimmer,
    Header,
    HeaderContent,
    HeaderSubheader,
    Icon,
    Loader,
    Segment
} from 'semantic-ui-react'


function AppointmentCardGroup({loading_bookings, bookings}) {

    return (bookings && bookings.length === 0) ? (
        <Segment color='red'>
            <Header icon textAlign='center'>
                <Icon name='bullhorn'/>
                <HeaderContent>
                    No previous appointments made!
                </HeaderContent>
                <HeaderSubheader>
                    Click the button above to book your first appointment!
                </HeaderSubheader>
            </Header>
        </Segment>
    ) : (
        <CardGroup centered>
            {
                loading_bookings ? (
                    <Dimmer active>
                        <Loader/>
                    </Dimmer>) : (
                    bookings &&
                    bookings.map((booking, index) => (
                        <Card key={index}>
                            <CardContent>
                                <CardHeader>
                                    {booking.createdAt}
                                </CardHeader>
                                {
                                    booking.status === 'unconfirmed' ?
                                        <CardMeta>
                                            <Header as='h4' color='grey'>
                                                {booking.status}
                                            </Header>
                                        </CardMeta>
                                        :
                                        (
                                            booking.status === 'denied' ?
                                                <CardMeta>
                                                    <Header as='h4' color='red'>
                                                        {booking.status}
                                                    </Header>
                                                </CardMeta>
                                                :
                                                <CardMeta>
                                                    <Header as='h4' color='green'>
                                                        {booking.status}
                                                    </Header>
                                                </CardMeta>
                                        )
                                }

                                <CardDescription>
                                    {booking.serviceType}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))
                )
            }
        </CardGroup>
    )
}


export default AppointmentCardGroup
