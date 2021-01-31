import React from 'react';

import { Route, Redirect, BrowserRouter} from 'react-router-dom'

import './App.css';
import NavbarWeb from "./components/navbar";
import Home from "./pages/home/home";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Webapps from "./pages/webapps/webapps";

import webapps from "./pages/webapps/webapps.json"


function App() {
    return (
        <div>
            <NavbarWeb></NavbarWeb>
            <BrowserRouter>
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )}/>
                <Route path="/home" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/webapps" component={Webapps} />
                <Route path="/contact" component={Contact} />
                <Route path="/egg" render={() => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")} />
                <Route path="/fb" render={() => (window.location.href = "https://www.facebook.com/moises.trejo.773")} />
                <Route path="/ig" render={() => (window.location.href = "https://www.instagram.com/moises.trejo0/")} />
                {webapps.map(webapp => {
                        return <Route path={`/${webapp.id}`} render={() => (window.location.href = `https://moisesp5js.s3.us-east-2.amazonaws.com/${webapp.id}/index.html`)} />
                    })}
            </BrowserRouter>
        </div>
    );
}

export default App;
