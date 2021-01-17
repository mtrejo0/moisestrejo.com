import React from 'react'
import './webapps.scss'
import {shuffle} from '../../util'


import {Card, CardColumns, Button} from "react-bootstrap";

class Webapp {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }
}
var p5WebApps = [
    new Webapp(
        "Genetic Path Finding",
        "Generates lots of agents with random moves. The ones with the best fitness are used to " +
        "generate more agents to learn a path.",
        "genetic"),
    new Webapp("Angle PID",
        "Three turrets use PID to lock onto your cursor to be able to shoot at ",
        "anglePID"),
    new Webapp("MNIST Digit Calculator",
        "Allows you to draw a digit. It will print the array representation of this digit to use in a Google Collab notebook I made so you can learn how to build a simple machine learning model",
        "mnist",),
    new Webapp("Maze path finder",
        "Generates random maze and uses BFS to make sure there is a path possible between them then visualizes how it searches the graph until it finds a path from the start point to the end point",
        "bfs",),
    new Webapp("Langton's Ant",
        "A large matrix where we can simulate Langton's Ant that has the simple rules: if white turn left, if black turn right",
        "maze",),
    new Webapp("PID Control",
        "PID stands for proportional integral derivative which is a controller that will try to reach a state this interaction lets you change the constants and goal state",
        "PID",),
    new Webapp("PID Race car",
        "Small simulation with a car that uses PID to follow a wall. Click and drag to add obstacles",
        "race car",),
    new Webapp("Base Calculator",
        "Add number, its base A, and target base B this will convert the number from base A to base B",
        "baseConverter",),
    new Webapp("Dopler Effect Simulation",
        "Dopler effect is the effect of having waves in motion this shows different vizualizations you can use",
        "dopler",),
    new Webapp("Stopwatch",
        "Colorful stopwatch",
        "timer",),
    new Webapp("Selection Sort",
        "Sorting algorithm that picks the next best item to sort O(n^2), _O_(n^2)",
        "selection",),
    new Webapp("Insertion Sort",
        "Sorting algorithm that swaps items until they are in the right place O(n^2), _O_(n)",
        "insertion",),
    new Webapp("Merge Sort",
        "Sorting algorithm that sivide and conquer to sort smaller problems and combine them to sort an array O(n^2)",
        "mergeSort",),
    new Webapp("Lissajous Generator",
        "Lissajous created by using circles with different periods",
        "lissajous",),
    new Webapp("Flappy Bird",
        "Remake of Flappy Bird, press space to jump",
        "flappyBird",),
    new Webapp("Asteroids",
        "Remake of Asteroids, use arrow keys to more space to shoot",
        "rocket",),
    new Webapp("Drunk Walk",
        "Shows brownian motion and the path the agent takes",
        "drunkWalk",),
    new Webapp("Diffusion",
        "Shows brownian motion with more particles",
        "diffusion",),
    new Webapp("Particle Interaction",
        "Shows brownian motion with particles and allows you to see interactions",
        "particleInteraction",),
    new Webapp("Wave Particles",
        "Shows particles that move in circles, your mous position changes their period and their overall image",
        "spinParticles",),
    new Webapp("Calculator",
        "Simple arithmetic calculator",
        "calculator",)
]


class Webapps extends React.Component {


    constructor() {
        super();
    }
    render() {
        return <div>
            <CardColumns style={{padding: 16}}>
                {p5WebApps.map((webapp, index) =>
                    <Card key={index}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + `/webappImages/${webapp.id}.jpg`} />
                        <Card.Body>
                            <Card.Title>{webapp.name}</Card.Title>
                            <Card.Text>
                                {webapp.description}
                                <br/>
                                <br/>
                                <Button variant={'outline-primary'} href={"https://moisesp5js.s3.us-east-2.amazonaws.com/javascriptProjects/"+webapp.id+"/index.html"}>Link</Button>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                )}
            </CardColumns>

        </div>
    }
}

export default Webapps;
