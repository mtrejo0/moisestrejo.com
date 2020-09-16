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

// webapps
import Rhyme from './pages/webapps/reactWebApps/rhyme'

import reactWebApps from '../src/pages/webapps/reacrWebApps.json'

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
                    <Route path="/contact" component={Contact} />
                    <Route path="/webapps" component={() => <Webapps show={true} /> } />
                    {reactWebApps.map((webapp, index) => {
                            return < Route key={index} path = {"/"+webapp.path} component = {Rhyme}/>
                        }
                    )}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
