import React from 'react';

import { Route,Redirect, BrowserRouter} from 'react-router-dom'

import './App.css';
import NavbarWeb from "./components/navbar";
import Home from "./pages/home/home";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects";
import Education from "./pages/education/education";
import Contact from "./pages/contact/contact";
import Webapps from "./pages/webapps/webapps";


function App() {

    return (
        <div>
            <NavbarWeb></NavbarWeb>
            <BrowserRouter>
                <div>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route path="/home" component={Home} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/education" component={Education} />
                    <Route path="/webapps" component={Webapps} />
                    <Route path="/contact" component={Contact} />
                    
                   
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
