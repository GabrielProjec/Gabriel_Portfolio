import React from "react";
import { Routes, Route } from "react-router-dom";

//PAGES
import Main from "../pages/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
