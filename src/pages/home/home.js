import React from 'react'

import "./home.scss";
import Display from "../../components/displayCard/display";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: 0,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test');
            let responseJson = await response.json();
            this.setState(
                {
                    isLoading: false,
                    users: responseJson.body.userCount,
                },
                function() {}
            );
        } catch (error) {
            this.setState({
                isLoading: true,
                error: true,
                users: 0
            });
        }
    }

    render() {
        const { isLoading, users  } = this.state;
        return (
            <div>
                <div className={'paragraph'}>
                    <h3 className={'header'}>Hi! Im Moises</h3>
                    <p>You are the {isLoading?'Loading...':users}th person to visit this site!</p>
                </div>
                <div className={'paragraph'}>
                    I am currently a junior at MIT studying Computer Science. Through my coursework and experience, I've developed skills in Android Development, Embedded Systems, Web Development, Back-End Development, and Unity Development. I'm looking for an internship in Software Engineering involving Machine Learning, Cloud Computing, and/or any of the previously mentioned areas in order to put my training into hands-on experience and further develop my skills.
                </div>

                <h3>About Me</h3>
                <br/>

                <Display title={"Texas 🤠"} body={"Born and raised in Dallas, Texas where I went to the School of Science and Engineering Magnet High School"} src={'https://lh3.googleusercontent.com/nbDNaGtzazTJ9Scs14V6paO9qSj0Qu1mLXTxAOo-lj78TX5SGno5QnMywiVkro-uKYLnch40mnrqOAKVhA0k0UjLEZn-fZFAxy8H5BKs5LkVSBL0Ghu92jlitiOjiMhfKoyFryiO9EU=w2400'}></Display>
                <Display flip={true}title={"MIT class of 2022"} body={"I am a rising junior at MIT studying computer science. I am part of SHPE and MAES on campus and I am interested in earning my Masters of Engineering"} src={'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201810/MIT-Computer-Announce-01_0.jpg?itok=VCOJMCvN'}></Display>
                <Display title={"Mexicano 🇲🇽"} body={"My parents are from Zacatecas, Mexico and I am very proud of my heritage"} src={'https://lh3.googleusercontent.com/OmbLgUYRWou9Y-msI5dQkGaGyBq73F6d_e7cz4emO60a_rnGuqhrJn5UmdItWelRefUpVr94WJ16-B5FMcklonxhr-f9saUniWms7ZFVEtU44ffeNnEXOIGBjH_VTP2HJiHNXZYKlAI=w2400'}></Display>
                <Display flip={true}title={"FGLI"} body={"FLGI stands for first generation low income student. I am first generation American and first generation college student and I am very proud of this."} src={'https://lh3.googleusercontent.com/6gyaHSsuHm-ag8To8hoYXRBDsbAuUOXVXhlMD31QjZQuBwCGP9ok29QnQjYqADCub6JXTLSxhIMUXkjz9N0d_AxVEmXFfIwMf0I3zGcU44QqERnRUPsFJeaS3n0XCcU3AsI6li8nh0E=w2400'}></Display>

                </div>
        );
    }
}

export default Home;
