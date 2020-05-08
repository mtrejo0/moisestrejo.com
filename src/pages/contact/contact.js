import React from 'react'

import {Card,CardDeck} from "react-bootstrap";

import './contact.scss'

class Contact extends React.Component {

    render() {
        return(

            <div className={'wrapper'}>
                <CardDeck>
                <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Email</Card.Header>
                    <Card.Body>
                        <Card.Title><a href="mailto:moisest@mit.edu" target="_top">moisest@mit.edu</a></Card.Title>
                        <Card.Text>
                            Email me for quick response!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Github</Card.Header>
                    <Card.Body>
                        <Card.Title><a href="https://github.com/mtrejo0" target="_blank" rel="noopener noreferrer" >github.com/mtrejo0</a></Card.Title>
                        <Card.Text>
                            Checkout my past projects!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>LinkedIn</Card.Header>
                    <Card.Body>
                        <Card.Title><a href="https://www.linkedin.com/in/moises-t-89228b13b" target="_blank" rel="noopener noreferrer">moises-t-89228b13b</a></Card.Title>
                        <Card.Text>
                            Connect with me!
                        </Card.Text>
                    </Card.Body>
                </Card>
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>YouTube</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="https://www.youtube.com/channel/UCL0ZwHaWI6mSfFXm7Lb-NCw" target="_blank" rel="noopener noreferrer">The IT Channel</a></Card.Title>
                            <Card.Text>
                                Watch my CS videos!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}
export default Contact;
