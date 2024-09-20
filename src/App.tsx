import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import RandomNumbers from "./components/RandomNumbers";
import WordFrequency from "./components/WordFrequency";
import Blog from "./containers/blog";
import Contact from "./containers/contact";
import Home from "./containers/home";
import Porfolio from "./containers/portfolio";
import Press from "./containers/press";
import Resume from "./containers/resume";
import ResumePlusPlus from "./containers/resume++";

import p5jsProjects from "./information/p5jsProjects.json";

import links from "./information/links.json";

import externalApps from "./information/externalApps.json";

import "./styles.css";
import ErrorPage from "./containers/errorPage";
import P5Art from "./containers/p5art";
import Shop from "./containers/shop";
import Art from "./containers/art";
import Footer from "./components/Footer";

import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import Sketch from "react-p5";

LogRocket.init("5ynwnu/moisestrejocom");
// after calling LogRocket.init()
setupLogRocketReact(LogRocket);

const GoTo = ({ link }: { link: string }) => {
  window.location.href = link;
  return <>Loading ...</>;
};

const App = () => {
  const isMobile = window.innerWidth <= 768; // Assuming 768px as the breakpoint for mobile devices
  const numDots = isMobile ? 20 : 50;
  let dots: { x: number; y: number; vx: number; vy: number }[] = [];

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: p5.random(p5.width),
        y: p5.random(p5.height),
        vx: p5.random(-1, 1),
        vy: p5.random(-1, 1)
      });
    }
  };

  const draw = (p5: any) => {
    p5.background(255); // White background
    p5.strokeWeight(2);

    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i];
      
      // Move the dot
      dot.x += dot.vx;
      dot.y += dot.vy;
      
      // Bounce off edges
      if (dot.x < 0 || dot.x > p5.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > p5.height) dot.vy *= -1;
      
      // Draw the dot as an ellipse
      p5.fill(0); // Black color
      p5.ellipse(dot.x, dot.y, 5, 5);
      
      // Connect nearby dots with fading lines
      for (let j = i + 1; j < dots.length; j++) {
        let other = dots[j];
        let d = p5.dist(dot.x, dot.y, other.x, other.y);
        if (d < 150) {
          let alpha = p5.map(d, 0, 100, 255, 0); // Map distance to alpha value
          p5.stroke(0, alpha); // Set stroke color with calculated alpha
          p5.line(dot.x, dot.y, other.x, other.y);
        }
      }
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* p5.js sketch running in the background */}
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <Sketch setup={setup} draw={draw} />
      </div>

      {/* Your foreground content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div>
          <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<Home />}></Route>
              <Route path="/resume" element={<Resume />} />
              <Route path="/resume++" element={<ResumePlusPlus />} />
              <Route path="/resume++/:id" element={<ResumePlusPlus />} />
              <Route path="/portfolio" element={<Porfolio />} />
              <Route path="/portfolio/:id" element={<Porfolio />} />
              <Route path="/p5art" element={<P5Art />} />
              <Route path="/p5art/:id" element={<P5Art />} />
              <Route path="/art" element={<Art />} />
              <Route path="/art/:id" element={<Art />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<Press />} />
              <Route path="/shop" element={<Shop />} />
              {links.map((link) =>
                link.ids.map((id) => {
                  return (
                    <Route path={`/${id}`} element={<GoTo link={link.link} />} />
                  );
                })
              )}
              {p5jsProjects.map((webapp) => {
                return (
                  <Route
                    path={`/${webapp.id}`}
                    element={
                      <GoTo
                        link={`https://p5moises-27cba0c96786.herokuapp.com/${webapp.id}`}
                      />
                    }
                  />
                );
              })}
              {externalApps.map((webapp) => {
                return (
                  <Route
                    path={`/${webapp.id}`}
                    element={<GoTo link={webapp.link} />}
                  />
                );
              })}
              <Route path="/randomNumbers" element={<RandomNumbers />} />
              <Route path="/wordFrequency" element={<WordFrequency />} />
              <Route path="/college" element={<GoTo link="https://medium.com/@moises.trejo0/how-to-apply-to-college-b9084219ffc1"/>}/>

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
