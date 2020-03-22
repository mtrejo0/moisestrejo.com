import React from 'react'

import "./home.scss";

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
            console.log(responseJson)
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
                    I am currently a sophomore at MIT studying Computer Science. Through my coursework and experience, I've developed skills in Android Development, Embedded Systems, Web Development, Back-End Development, and Unity Development. I'm looking for an internship in Software Engineering involving Machine Learning, Cloud Computing, and/or any of the previously mentioned areas in order to put my training into hands-on experience and further develop my skills.
                </div>
            </div>
        );
    }
}

export default Home;
