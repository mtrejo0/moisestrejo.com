import React from 'react'

import {Card, CardDeck, CardGroup} from "react-bootstrap";

import './contact.scss'

class Contact extends React.Component {

    render() {
        return(

            <div className={'wrapper'}>
                <CardGroup>
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Email</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="mailto:moisest@mit.edu" target="_top">moisest@mit.edu</a></Card.Title>
                            <Card.Text>
                                Email me for quick response
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Calendarly</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="https://calendly.com/moisestrejo/30min" target="_blank" rel="noopener noreferrer">moisestrejo</a></Card.Title>
                            <Card.Text>
                                Schedule some time with me
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br></br>
                <CardGroup>
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>LinkedIn</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="https://www.linkedin.com/in/moisestrejo" target="_blank" rel="noopener noreferrer">moisestrejo</a></Card.Title>
                            <Card.Text>
                                Connect with me
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Instagram</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="https://www.instagram.com/moises.trejo0/" target="_blank" rel="noopener noreferrer">@moises.trejo0</a></Card.Title>
                            <Card.Text>
                                Follow me
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br></br>
                <CardGroup>
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Github</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/mtrejo0" target="_blank" rel="noopener noreferrer" >github.com/mtrejo0</a></Card.Title>
                            <Card.Text>
                                Checkout my past projects
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Devpost</Card.Header>
                        <Card.Body>
                            <Card.Title><a href="https://devpost.com/mtrejo" target="_blank" rel="noopener noreferrer" >mtrejo</a></Card.Title>
                            <Card.Text>
                                Checkout past hackathons
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}
export default Contact;
