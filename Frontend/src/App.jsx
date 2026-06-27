import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About/About";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Navbar /> */}
      <BrowserRouter>
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />C{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
