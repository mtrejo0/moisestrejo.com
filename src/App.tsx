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

const GoTo = ({ link }: { link: string }) => {
  window.location.href = link;
  return <>Loading ...</>;
};

function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Navigate to="/portfolio" />} />
            <Route path="/about" element={<Home />}></Route>
            <Route path="/resume" element={<Resume />} />
            <Route path="/resume++" element={<ResumePlusPlus />} />
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
                      link={`https://mtrejo0.github.io/p5/${webapp.id}/index.html`}
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

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </body>
  );
}

export default App;
