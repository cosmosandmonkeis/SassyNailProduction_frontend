import React from 'react'
import {Header, Button, Icon} from "semantic-ui-react";

function HomePageBanner({props, big_header_text, subtext}) {
    const changeRoute = () => {props.history.push('/services')}

    return (
        <div className="home-hero-image">
            <div className="hero-text">
                <Header
                    as='h1'
                    content={big_header_text}
                    inverted
                />
                <Header
                    as='h4'
                    content={subtext}
                    inverted
                />
                <Button
                    onClick={changeRoute}>
                    Checkout our services
                    <Icon name='right arrow' />
                </Button>
            </div>
        </div>
    )
}

export default HomePageBanner
