import React from 'react';

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import "./styles.css";
import NavigationBar from "./components/navbar";
import Home from "./containers/home";
import Resume from "./containers/resume";
import ResumePlusPlus from "./containers/resume++";
import Contact from "./containers/contact";
import Error from "./containers/error";
import Blog from "./containers/blog";

import Webapps from "./containers/webapps";
import webapps from "./information/webapps.json";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/resume++" component={ResumePlusPlus} />
          <Route path="/webapps" component={Webapps} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="*" component={Error} />
          <Route
            path="/egg"
            render={() =>
              (window.location.href =
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
          />
          <Route
            path="/fb"
            render={() =>
              (window.location.href =
                "https://www.facebook.com/moises.trejo.773")
            }
          />
          <Route
            path="/ig"
            render={() =>
              (window.location.href =
                "https://www.instagram.com/moises.trejo0/")
            }
          />
          {webapps.map((webapp) => {
            return (
              <Route
                path={`/${webapp.id}`}
                render={() =>
                  (window.location.href = `https://moisesp5js.s3.us-east-2.amazonaws.com/${webapp.id}/index.html`)
                }
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
