// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./routing/home";
import Login from "./routing/login";
import Contact from "./routing/contact";
import About from "./routing/about";
import Page from "./routing/pagenotfound";

function App() {
  return (
    <div>
      <Router>
        <div
          style={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link ClassName="Route" to="/Home">
            HOME
          </Link>
          <Link ClassName="Route" to="/Login">
            LOGIN
          </Link>
          <Link ClassName="Route" to="/Contact">
            CONTACT
          </Link>
          <Link ClassName="Route" to="/About">
            ABOUT
          </Link>
        </div>
        <Routes>
          <Route path="*"></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
