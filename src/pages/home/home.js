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
        // try {
        //     const response = await fetch('https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test');
        //     let responseJson = await response.json();
        //     this.setState(
        //         {
        //             isLoading: false,
        //             users: responseJson.body.userCount,
        //         },
        //         function() {}
        //     );
        // } catch (error) {
        //     this.setState({
        //         isLoading: true,
        //         error: true,
        //         users: 0
        //     });
        // }
    }

    render() {
        const { isLoading, users  } = this.state;

        let aboutMe = [
            {
                "header": "Texas 🤠",
                "description": "Born and raised in Dallas, Texas where I went to the School of Science and Engineering Magnet High School",
                "img": "facebook"
            },
            {
                "header": "MIT class of 2022",
                "description": "I am a rising junior at MIT studying computer science. I am part of SHPE and MAES on campus and I am interested in earning my Masters of Engineering",
                "img": "mit"
            },
            {
                "header": "Mexicano 🇲🇽",
                "description": "My parents are from Zacatecas, Mexico and I am very proud of my heritage",
                "img": "mexico"
            },
            {
                "header": "MIT class of 2022",
                "description": "FLGI stands for first generation low income student. I am first generation American and first generation college student and I am very extremely proud of this",
                "img": "fam"
            }
        ]

        return (
            <div>
                <div className={'paragraph'}>
                    <h3 className={'header'}>Hi! Im Moises</h3>
                    {/* <p>You are the {isLoading?'Loading...':users}th person to visit this site!</p> */}
                </div>
                <div className={'paragraph'}>
                    I am currently a junior at MIT studying Computer Science. Through my coursework and experience, I've developed skills in Android Development, Embedded Systems, Web Development, Back-End Development, and Unity Development. I'm always looking for new experiences to learn and grow!
                </div>

                <h3>About Me</h3>
                <br/>

                {aboutMe.map( item => <Display item={item}></Display>)}
                </div>
        );
    }
}

export default Home;
