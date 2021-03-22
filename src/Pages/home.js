import React from 'react'
import HomePageBanner from "../Components/HomePageBanner";
import {
    Button, Card, CardContent, CardDescription, CardGroup, CardHeader,
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    HeaderSubheader,
    Icon,
    Image,
    Segment
} from "semantic-ui-react";

function Home(props) {

    const changeRoute = () => {
        props.history.push('/bookings')
    }

    return (
        <div>
            <HomePageBanner props={props}
                            big_header_text='Sassy Nails Spa'
                            subtext='Walk in or Make an appointment'
            />
            <Container>
                <Grid>
                    <GridRow>
                        <GridColumn width={10}>
                            <Header>
                                OPTIMIZE YOUR SPA EXPERIENCE
                                <Header size='huge'>
                                    Use our new online booking system to cut wait
                                    times and view our services
                                    <HeaderSubheader>
                                        We are here to make your spa experience the best it can be.
                                    </HeaderSubheader>
                                </Header>
                                <Button animated='fade' onClick={changeRoute} primary>
                                    <Button.Content visible>Make an Appointment Now!</Button.Content>
                                    <Button.Content hidden><Icon name='right arrow'/></Button.Content>
                                </Button>
                            </Header>
                        </GridColumn>
                        <GridColumn width={6}>
                            <Image src='https://sassynailsoakland.com/static/images/opi-nail-lacquer.jpg'/>
                        </GridColumn>
                    </GridRow>
                    {/*<GridRow>*/}
                    {/*    <Grid.Column width={16}>*/}
                    {/*        <Segment placeholder>*/}
                    {/*            <Header size='huge' textAlign='centered'>*/}
                    {/*                Services We Provide*/}
                    {/*                <HeaderSubheader>*/}
                    {/*                    We provide excellent services as well as build intimate relationships with our*/}
                    {/*                    customers.*/}
                    {/*                    <br/>Here are some of the basic services we provide.*/}
                    {/*                </HeaderSubheader>*/}
                    {/*            </Header>*/}
                    {/*            <CardGroup itemsPerRow={3}>*/}
                    {/*                <Card>*/}
                    {/*                    <CardContent>*/}
                    {/*                        <Image*/}
                    {/*                            src='https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg'*/}
                    {/*                            size='medium'*/}
                    {/*                            rounded/>*/}
                    {/*                        <CardHeader>*/}
                    {/*                            Manicures*/}
                    {/*                        </CardHeader>*/}
                    {/*                        <CardDescription>*/}
                    {/*                            Regular manicures, gel manicures, and deluxe manicure.*/}
                    {/*                        </CardDescription>*/}
                    {/*                    </CardContent>*/}
                    {/*                </Card>*/}
                    {/*                <Card>*/}
                    {/*                    <CardContent>*/}
                    {/*                        <Image*/}
                    {/*                            src='https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg'*/}
                    {/*                            size='medium'*/}
                    {/*                            rounded/>*/}
                    {/*                        <CardHeader>*/}
                    {/*                            Pedicures*/}
                    {/*                        </CardHeader>*/}
                    {/*                        <CardDescription>*/}
                    {/*                            Regular pedicure, gel pedicure, and deluxe pedicure.*/}
                    {/*                        </CardDescription>*/}
                    {/*                    </CardContent>*/}
                    {/*                </Card>*/}
                    {/*                <Card>*/}
                    {/*                    <CardContent>*/}
                    {/*                        <Image*/}
                    {/*                            src='https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg'*/}
                    {/*                            size='medium'*/}
                    {/*                            rounded/>*/}
                    {/*                        <CardHeader>*/}
                    {/*                            Waxings*/}
                    {/*                        </CardHeader>*/}
                    {/*                        <CardDescription>*/}
                    {/*                            Different waxing options available.*/}
                    {/*                        </CardDescription>*/}
                    {/*                    </CardContent>*/}
                    {/*                </Card>*/}
                    {/*            </CardGroup>*/}
                    {/*        </Segment>*/}
                    {/*    </Grid.Column>*/}
                    {/*</GridRow>*/}
                </Grid>
            </Container>
            {/************************************************TRYING DIFFERENT LOOKS START RIGHT HERE *********************************/}
            <Grid>
                <GridRow>
                    <Grid.Column width={16}>
                        <Segment placeholder>
                            <Header size='huge' textAlign='center'>
                                Services We Provide
                                <HeaderSubheader>
                                    We provide excellent services as well as build intimate relationships with our
                                    customers.
                                    <br/>Here are some of the basic services we provide.
                                </HeaderSubheader>
                            </Header>
                            <Container>

                                <CardGroup itemsPerRow={3}>
                                    <Card>
                                        <CardContent>
                                            <Image
                                                src='https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg'
                                                size='medium'
                                                rounded/>
                                            <CardHeader>
                                                Manicures
                                            </CardHeader>
                                            <CardDescription>
                                                Regular manicures, gel manicures, and deluxe manicure.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <Image
                                                src='https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg'
                                                size='medium'
                                                rounded/>
                                            <CardHeader>
                                                Pedicures
                                            </CardHeader>
                                            <CardDescription>
                                                Regular pedicure, gel pedicure, and deluxe pedicure.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <Image
                                                src='https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg'
                                                size='medium'
                                                rounded/>
                                            <CardHeader>
                                                Waxings
                                            </CardHeader>
                                            <CardDescription>
                                                Different waxing options available.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </CardGroup>
                            </Container>
                        </Segment>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>

    )
}

export default Home
