import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";

function App() {
  return(
  <>
  <Header/>
  <Router>
    <Routes>
      <Route path="/" element={Home}></Route>
      <Route path="/login"element={login}></Route>
      <Route path="/contact" element={Contact}></Route>
    </Routes>
  </Router>
  </>
  )
}
export default App;
