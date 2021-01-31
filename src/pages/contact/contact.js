import React from 'react'

import './contact.scss'


class Contact extends React.Component {

    render() {
        return(
            <div class="center">
                <h1 class="title">Lets talk!</h1>
                <div class="columns">
                <div class="col">
                    <div class="contact-item">
                    <a href="mailto:moisest@mit.edu" target="_blank" rel="noopener noreferrer">moisest@mit.edu</a>
                    <p>Send me an email</p>
                    </div>
                    <div class="contact-item">
                    <a href="https://calendly.com/moisestrejo/15min" target="_blank" rel="noopener noreferrer">Calendly</a>
                    <p>Schedule some time with me</p>
                    </div>
                    <div class="contact-item">
                    <a href="https://www.linkedin.com/in/moisestrejo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <p>Connect with me</p>
                    </div>
                    <div class="contact-item">
                    <a href=" https://www.instagram.com/moises.trejo0/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <p>Follow me</p>
                    </div>
                </div>
                <div>
                    <div class="contact-item">
                    <a href="https://github.com/mtrejo0" target="_blank" rel="noopener noreferrer">Github</a>
                    <p>Checkout past projects</p>
                    </div>
                    <div class="contact-item">
                    <a href="https://devpost.com/mtrejo" target="_blank" rel="noopener noreferrer">Devpost</a>
                    <p>Checkout past hackathons</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Contact;
