import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Aboutus } from "./components/Aboutus";

import { index } from "./components";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
