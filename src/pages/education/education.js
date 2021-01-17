import React from 'react'
import {Card, CardColumns} from "react-bootstrap";

import './education.scss'

class Education extends React.Component {


    render() {

        let classes = [
            {
                "course" : "6.170",
                "name": "Software Studio",
                "description": "Provides design-focused instruction on how to build software applications. Design topics include classic human-computer interaction (HCI) design tactics (need finding, heuristic evaluation, prototyping, user testing), conceptual design (modeling and evaluating constituent concepts), abstract data modeling, and visual design. Implementation topics include functional programming in Javascript, reactive front-ends, web services, and databases. Students work in teams on term-long projects in which they construct applications of social value.",
            },
            {
                "course" : "6.033",
                "name": "Computer Systems Engineering",
                "description": "Topics on the engineering of computer software and hardware systems: techniques for controlling complexity; strong modularity using client-server design, operating systems; performance, networks; naming; security and privacy; fault-tolerant systems, atomicity and coordination of concurrent activities, and recovery; impact of computer systems on society. Case studies of working systems and readings from the current literature provide comparisons and contrasts. Includes a single, semester-long design project. Students engage in extensive written communication exercises. Enrollment may be limited.",
            },
            {
                "course" : "6.031",
                "name": "Elements of Software Construction",
                "description": "",
            },
            {
                "course" : "6.046",
                "name": "Design and Analysis of Algorithms",
                "description": "Techniques for the design and analysis of efficient algorithms, emphasizing methods useful in practice. Topics include sorting; search trees, heaps, and hashing; divide-and-conquer; dynamic programming; greedy algorithms; amortized analysis; graph algorithms; and shortest paths. Advanced topics may include network flow; computational geometry; number-theoretic algorithms; polynomial and matrix calculations; caching; and parallel computing.",
            },
            {
                "course" : "6.036",
                "name": "Introduction to Machine Learning",
                "description": "Introduces principles, algorithms, and applications of machine learning from the point of view of modeling and prediction; formulation of learning problems; representation, over-fitting, generalization; clustering, classification, probabilistic modeling; and methods such as support vector machines, hidden Markov models, and neural networks. Students taking graduate version complete additional assignments. Meets with 6.862 when offered concurrently. Recommended prerequisites: 6.006 and 18.06. Enrollment may be limited.",
            },
            {
                "course" : "6.006",
                "name": "Introduction to Algorithms",
                "description": "Introduction to mathematical modeling of computational problems, as well as common algorithms, algorithmic paradigms, and data structures used to solve these problems. Emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems.",
            },
            {
                "course" : "6.004",
                "name": "Computation Structures",
                "description": "Provides an introduction to the design of digital systems and computer architecture. Emphasizes expressing all hardware designs in a high-level hardware language and synthesizing the designs. Topics include combinational and sequential circuits, instruction set abstraction for programmable hardware, single-cycle and pipelined processor implementations, multi-level memory hierarchies, virtual memory, exceptions and I/O, and parallel systems.",
            },
            {
                "course" : "6.009",
                "name": "Fundamentals of Programming",
                "description": "Introduces fundamental concepts of programming. Designed to develop skills in applying basic methods from programming languages to abstract problems. Topics include programming and Python basics, computational concepts, software engineering, algorithmic techniques, data types, and recursion. Lab component consists of software design, construction, and implementation of design.",
            },
            {
                "course" : "6.08",
                "name": "Introduction to EECS via Interconnected Embedded Systems",
                "description": "Introduction to embedded systems in the context of connected devices, wearables and the \"Internet of Things\" (IoT). Topics include microcontrollers, energy utilization, algorithmic efficiency, interfacing with sensors, networking, cryptography, and local versus distributed computation. Students design, make, and program an internet-connected wearable or handheld device. In final project, student teams design and demo their own cloud-connected IoT system. Enrollment limited; preference to first- and second-year students.",
            },
            {
                "course" : "6.UAT",
                "name": "Oral Communication",
                "description": "Provides instruction in aspects of effective technical oral presentations and exposure to communication skills useful in a workplace setting. Students create, give and revise a number of presentations of varying length targeting a range of different audiences. Enrollment may be limited.",
            },
        ]

        let classList = classes.map( course => course.course).join(', ')

        return(
            <div>
                <h3>Relevant Course Work</h3>
                <br/>
                <p>{classList}</p>
                <CardColumns style={{padding: 16}}>
                {classes.map(item => {
                    return(
                        <Card className="text-center center education-card">
                            <Card.Header>{item.course} - {item.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
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

class Class {
    constructor(name, title, description) {
        this.name = name;
        this.title = title;
        this.description = description;
    }
}
export default Education;