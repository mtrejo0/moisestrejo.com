import React from 'react'
import {Card} from "react-bootstrap";

import './projects.scss'

class Projects extends React.Component {

    render() {
        let android = [
            new Project('Skillshop','Skillshop is a mobile application that lets users host classes in areas they like such as education, culinary, and arts. These posts are shared with other users in the area and connects users who want to learn and users who want to teach to promote a sharing of knowldge in communities.','https://github.com/fbu2019/team_project_apt'),
            new Project('InstagramMirror','InstagramApplication a mobile application I developed to have most of the features of the real Instagram. This app allows users to make accounts and post pictures with captions for other people on the application to see. Users can view posts on a recycler view that has a pull down to refresh feature. I used the Heroku service with parse as a backend to store user accounts, pictures, and data. Users can take pictures in real time to post to this application','https://github.com/mtrejo0/InstagramApplication'),
            new Project('TwitterMirror','TwitterApplication is an android app that allows a user to view his Twitter timeline and post a new tweet. The app utilizes Twitter REST API allowing you to log into your own twitter account, make tweets, and retweet posts. Other features shows images from posts and other user profiles.','https://github.com/mtrejo0/TwitterApplication'),
            new Project('Flickster','Flixter shows the latest movies currently playing in theaters. The app utilizes the Movie Database API to display images and basic information about these movies to the user. It allows you to also view the movie trailer in the same app.','https://github.com/mtrejo0/MapsApp'),
        ]

        let hackathon = [
            new Project('Estar Guars', 'Estar Guars is a game I helped developed during HackMIT 2018. We used Unity and the HTC Vive to make this project possible. We spend 24 hrs developing an asteroid experience that puts you in the position of a spaceship navigating an asteroid field allowing you to navigate the field and shoot asteroids.', 'https://devpost.com/software/estar-guars'),
            new Project('Voice Mobility', 'Voice Mobility is meant to be a representation of what mobility for disabled people can use in the future. We developed a mobile application that uses voice commands to tell a mobile unit to move in certain directions. We used the Google Voice API and a Flask Python server to communicate with the mobile unit.', 'https://devpost.com/software/voice-mobility')
        ]

        let school = [
            new Project('IOT Lazer Tag', 'Our Lazer tag is a variation of the regular laser tag game with the addition of a smartphone application and wifi connectedness within the game. Players start off in any location and ready up using their custom vest and gun hardware and get put into a game. In the app every player can see the locations of all the players anonymously to choose where or who to target next. The application also has all the game values for each player like lives and bullets to have an accurate representation of the game. The way for a player to win is to be the last man standing.', 'https://github.com/mtrejo0/LaserTag')
        ]



        return(
            <div>
                <h3>Android</h3>
                {android.map(item => {
                    return(
                        <Card className="text-center center education-card">
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                    <br/>
                                    <a href={item.link}>link</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    );
                })}
                <h3>Hackathons</h3>
                {hackathon.map(item => {
                    return(
                        <Card className="text-center center education-card">
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                    <br/>
                                    <a href={item.link}>link</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    );
                })}
                <h3>School Projects</h3>
                {school.map(item => {
                    return(
                        <Card className="text-center center education-card">
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                    <br/>
                                    <a href={item.link}>link</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
                <br/>
                <br/>
            </div>
        )
    }
}

class Project {
    constructor(name = '', description='', link='') {
        this.name = name;
        this.link = link;
        this.description = description;
    }
}

export default Projects;
