import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Contact from "./containers/contact";
import Home from "./containers/home";

import "./styles.css";
import ErrorPage from "./containers/errorPage";

function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
