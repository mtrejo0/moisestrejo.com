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

import links from "./information/links.json";

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

          {links.map((link) =>
            link.ids.map((id) => {
              return (
                <Route
                  path={`/${id}`}
                  render={() => (window.location.href = link.link)}
                />
              );
            })
          )}

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
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
