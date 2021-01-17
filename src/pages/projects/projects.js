import React from 'react'
import {Card, CardColumns, Button} from "react-bootstrap";

import './projects.scss'

class Projects extends React.Component {

    render() {
        let projects = [
            {
                "name" : "Skillshop",
                "description" : "Skillshop is a mobile application that lets users host classes in areas they like such as education, culinary, and arts. These posts are shared with other users in the area and connects users who want to learn and users who want to teach to promote a sharing of knowldge in communities.",
                "link" : "https://github.com/fbu2019/team_project_apt",
                "img": "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/28-512.png"
            },
            {
                "name" : "InstagramMirror",
                "description" : "InstagramApplication a mobile application I developed to have most of the features of the real Instagram. This app allows users to make accounts and post pictures with captions for other people on the application to see. Users can view posts on a recycler view that has a pull down to refresh feature. I used the Heroku service with parse as a backend to store user accounts, pictures, and data. Users can take pictures in real time to post to this application",
                "link" : "https://github.com/mtrejo0/InstagramApplication",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            },
            {
                "name" : "TwitterMirror",
                "description" : "TwitterApplication is an android app that allows a user to view his Twitter timeline and post a new tweet. The app utilizes Twitter REST API allowing you to log into your own twitter account, make tweets, and retweet posts. Other features shows images from posts and other user profiles.",
                "link" : "https://github.com/mtrejo0/TwitterApplication",
                "img": "https://images-na.ssl-images-amazon.com/images/I/31KluT5nBkL.png"
            },
            {
                "name" : "Flickster",
                "description" : "Flixter shows the latest movies currently playing in theaters. The app utilizes the Movie Database API to display images and basic information about these movies to the user. It allows you to also view the movie trailer in the same app.",
                "link" : "https://github.com/mtrejo0/FlicksterApplication",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWF-m0rFYhSNQcmN0KhZe8o58Av-xyaDWJPA&usqp=CAU"
            },
            {
                "name" : "Estar Guars",
                "description" : "Estar Guars is a game I helped developed during HackMIT 2018. We used Unity and the HTC Vive to make this project possible. We spend 24 hrs developing an asteroid experience that puts you in the position of a spaceship navigating an asteroid field allowing you to navigate the field and shoot asteroids.",
                "link" : "https://devpost.com/software/estar-guars",
                "img": "https://unity3d.com/profiles/unity3d/themes/unity/images/pages/branding_trademarks/unity-masterbrand-black.png"
            },
            {
                "name" : "Voice Mobility",
                "description" : "Voice Mobility is meant to be a representation of what mobility for disabled people can use in the future. We developed a mobile application that uses voice commands to tell a mobile unit to move in certain directions. We used the Google Voice API and a Flask Python server to communicate with the mobile unit.",
                "link" : "https://devpost.com/software/voice-mobility",
                "img": "https://lh3.googleusercontent.com/NkxMnpT6nMqxJYr3RyPQFv7sd6SH1ot7U-0QG5AqEhZubL7-vCZnKSFyZSnQZautag501yqtmVO19YCC-y5C-g676i00DxHG1NSMER-7gG0DuBUvDPLhP6sRmuEIQs2pnDqxdt5uVtg=w2400"
            },
            {
                "name" : "IOT Lazer Tag",
                "description" : "Our Lazer tag is a variation of the regular laser tag game with the addition of a smartphone application and wifi connectedness within the game. Players start off in any location and ready up using their custom vest and gun hardware and get put into a game. In the app every player can see the locations of all the players anonymously to choose where or who to target next. The application also has all the game values for each player like lives and bullets to have an accurate representation of the game. The way for a player to win is to be the last man standing.",
                "link" : "https://github.com/mtrejo0/LaserTag",
                "img": "https://lh3.googleusercontent.com/SImCT7p_F592Utu1owtYxe2bphXhQfc61RpIieqgMNd8y10vWseU0p77lTGLpGAgVpBq6zd8iqXKTVF6lEjfwf3mhZWjMiF8K4uiJ3OC6swAay5DexpSwvtZOQ6lymj7RI6kirqOabM=w2400"
            },
            
        ]

        return(
            <div>
                <h3>Projects</h3>
                <p>Few of my past team projects in android dev, hackathons, and school projects</p>
                <CardColumns style={{padding: 16}}>
                {projects.map(item => {
                    return(
                        <Card className="text-center center education-card">

                            <Card.Header>{item.name}</Card.Header>
                            <Card.Img variant="top" src={item.img} style={{width: '200px', margin: '16px'}}/>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                    <br/>
                                    <br/>
                                    <Button href={item.link}> Link!</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    );
                })}
                </CardColumns>
            </div>
        )
    }
}

export default Projects;
