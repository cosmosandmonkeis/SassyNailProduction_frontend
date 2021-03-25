import React from 'react'
import {Card, CardContent, Dimmer, Header, HeaderSubheader, Icon, Loader, Segment} from 'semantic-ui-react'

function AppointmentCardGroup({loading_bookings, bookings}) {

    return (bookings && bookings.length === 0) ? (
        <Segment color='red'>
            <Header icon textAlign='center'>
                <Icon name='bullhorn'/>
                <Header.Content >
                    No previous appointments made!
                </Header.Content>
                <HeaderSubheader>
                    Click the button above to book your first appointment!
                </HeaderSubheader>
            </Header>
        </Segment>
    ) : (
        <Card.Group>
            {
                loading_bookings ? (
                    <Dimmer active>
                        <Loader/>
                    </Dimmer>) : (
                    bookings &&
                    bookings.map((booking, index) => (
                        <Card key={index}>
                            <CardContent>
                                <Card.Header>
                                    {booking.createdAt}
                                </Card.Header>
                                <Card.Meta>
                                    {booking.confirmed.toString()}
                                </Card.Meta>
                                <Card.Description>
                                    {booking.serviceType}
                                </Card.Description>
                            </CardContent>
                        </Card>
                    ))
                )
            }
        </Card.Group>
    )
}



export default AppointmentCardGroup
