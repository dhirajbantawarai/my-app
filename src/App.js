import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { index } from "./components";

function App() {
<<<<<<< HEAD
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/home" element={Home}></Route>
          <Route path="/login" element={Login}></Route>
          <Route path="/contact" element={Contact}></Route>
          <Route path="/index" element={index}></Route>
        </Routes>
      </Router>
    </>
  );
=======
  return(
  <>
  <Header/>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </Router>
  </>
  )
>>>>>>> 527e64b59a4bc0bd913bcb4b3963ab45db7320a6
}
export default App;
