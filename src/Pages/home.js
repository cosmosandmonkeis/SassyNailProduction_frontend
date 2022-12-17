import React from 'react'
import HomePageBanner from "../Components/HomePageBanner";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
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
import {useViewport} from "../context/mobile";
import LazyLoad from 'react-lazy-load';

function Home(props) {

    const changeRoute = () => {
        props.history.push('/bookings')
    }

    const size = useViewport()
    const mobileItems = size.width < 500 ? 1 : 3

    return (
        <div>
            <HomePageBanner props={props}
                            big_header_text='Sassy Nails Spa'
                            subtext='Welcome! Offering 20% off all Waxing and Gel-X services. Please call us for more information.'
            />
            <Container>
                <Grid>
                    <GridRow>
                        <GridColumn width={10}>
                            <Header>
                                OPTIMIZE YOUR SPA EXPERIENCE
                                <Header size='huge'>
                                    Our New website is a Work-In-Progress! For Any Inquiries, Call Us for
                                    Clarifications!
                                    <HeaderSubheader>
                                        We are here to make your spa experience the best it can be.
                                    </HeaderSubheader>
                                </Header>
                                {/*<Button animated='fade' onClick={changeRoute} primary>*/}
                                {/*    <Button.Content visible>Make an Appointment Now!</Button.Content>*/}
                                {/*    <Button.Content hidden><Icon name='right arrow'/></Button.Content>*/}
                                {/*</Button>*/}
                            </Header>
                        </GridColumn>
                        <GridColumn width={6}>
                            <LazyLoad offset={5}>
                                <Image src="https://i.ibb.co/zxtFZwf/Opi-nail-lacquer-600x600.png"/>
                            </LazyLoad>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>
            <Grid>
                <GridRow>
                    <GridColumn width={16}>
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
                                <CardGroup itemsPerRow={mobileItems}>
                                    <Card>
                                        <Image
                                            src='/manicure-400x400.jpg'
                                            rounded/>
                                        <CardContent>
                                            <CardHeader>
                                                Manicures
                                            </CardHeader>
                                            <CardDescription>
                                                Regular manicures, gel manicures, and deluxe manicure.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <Image
                                            src='/Spa-treatment-and-product-for-female-feet-and-foot-spa-Foot-bath-in-bowl-with-tropical-flowers-Thail.jpg'
                                            rounded/>
                                        <CardContent>
                                            <CardHeader>
                                                Pedicures
                                            </CardHeader>
                                            <CardDescription>
                                                Regular pedicure, gel pedicure, and deluxe pedicure.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <Image
                                            src='/waxing-400x400.jpg'
                                            rounded/>
                                        <CardContent>
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
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>

    )
}

export default Home
