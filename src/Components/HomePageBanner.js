import React from 'react'
import {Button, Header, Icon} from "semantic-ui-react";

function HomePageBanner({props, big_header_text, subtext}) {
    const changeRoute = () => {
        props.history.push('/services')
    }

    return (
        <div className="home-hero-image">
            <div className="hero-text">
                <Header size='huge'
                        inverted={true}>
                    {big_header_text}
                    <Header.Subheader>
                        {subtext}
                    </Header.Subheader>
                </Header>
                <Button primary animated='fade' onClick={changeRoute}>
                    <Button.Content visible>Checkout our services</Button.Content>
                    <Button.Content hidden><Icon name='right arrow'/></Button.Content>
                </Button>
            </div>
        </div>
    )
}

export default HomePageBanner
