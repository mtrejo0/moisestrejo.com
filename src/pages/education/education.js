import React from 'react'
import {Card} from "react-bootstrap";

import './education.scss'

class Education extends React.Component {


    render() {
        let classes = [
            new Class('6.033', 'Computer Systems Engineering','Topics on the engineering of computer software and hardware systems: techniques for controlling complexity; strong modularity using client-server design, operating systems; performance, networks; naming; security and privacy; fault-tolerant systems, atomicity and coordination of concurrent activities, and recovery; impact of computer systems on society. Case studies of working systems and readings from the current literature provide comparisons and contrasts. Includes a single, semester-long design project. Students engage in extensive written communication exercises. Enrollment may be limited.'),
            new Class('6.031', 'Elements of Software Construction', 'Introduces fundamental principles and techniques of software development: how to write software that is safe from bugs, easy to understand, and ready for change. Topics include specifications and invariants; testing, test-case generation, and coverage; abstract data types and representation independence; design patterns for object-oriented programming; concurrent programming, including message passing and shared memory concurrency, and defending against races and deadlock; and functional programming with immutable data and higher-order functions. Includes weekly programming exercises and larger group programming projects.'),
            new Class('6.046', 'Design and Analysis of Algorithms','Techniques for the design and analysis of efficient algorithms, emphasizing methods useful in practice. Topics include sorting; search trees, heaps, and hashing; divide-and-conquer; dynamic programming; greedy algorithms; amortized analysis; graph algorithms; and shortest paths. Advanced topics may include network flow; computational geometry; number-theoretic algorithms; polynomial and matrix calculations; caching; and parallel computing.'),
            new Class('6.036', 'Introduction to Machine Learning','Introduces principles, algorithms, and applications of machine learning from the point of view of modeling and prediction; formulation of learning problems; representation, over-fitting, generalization; clustering, classification, probabilistic modeling; and methods such as support vector machines, hidden Markov models, and neural networks. Students taking graduate version complete additional assignments. Meets with 6.862 when offered concurrently. Recommended prerequisites: 6.006 and 18.06. Enrollment may be limited.'),
            new Class('6.006', 'Introduction to Algorithms','Introduction to mathematical modeling of computational problems, as well as common algorithms, algorithmic paradigms, and data structures used to solve these problems. Emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems.'),
            new Class('6.004', 'Computation Structures','Provides an introduction to the design of digital systems and computer architecture. Emphasizes expressing all hardware designs in a high-level hardware language and synthesizing the designs. Topics include combinational and sequential circuits, instruction set abstraction for programmable hardware, single-cycle and pipelined processor implementations, multi-level memory hierarchies, virtual memory, exceptions and I/O, and parallel systems.'),
            new Class('6.009', 'Fundamentals of Programming','ntroduces fundamental concepts of programming. Designed to develop skills in applying basic methods from programming languages to abstract problems. Topics include programming and Python basics, computational concepts, software engineering, algorithmic techniques, data types, and recursion.  Lab component consists of software design, construction, and implementation of design.'),
            new Class('6.08', 'Introduction to EECS via Interconnected Embedded Systems','Introduction to embedded systems in the context of connected devices, wearables and the "Internet of Things" (IoT). Topics include microcontrollers, energy utilization, algorithmic efficiency, interfacing with sensors, networking, cryptography, and local versus distributed computation. Students design, make, and program an internet-connected wearable or handheld device. In final project, student teams design and demo their own cloud-connected IoT system. Enrollment limited; preference to first- and second-year students.'),
            new Class('6.UAT', 'Oral Communication', 'Provides instruction in aspects of effective technical oral presentations and exposure to communication skills useful in a workplace setting. Students create, give and revise a number of presentations of varying length targeting a range of different audiences. Enrollment may be limited.')
        ]
        return(
            <div >
                {classes.map(item => {
                    return(
                    <Card className="text-center center education-card">
                        <Card.Header>{item.name} - {item.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {item.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    );
                })}
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
