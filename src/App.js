import React from 'react'
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route exact path="/about" component={<About />} />
        <Route exact path="/contact" component={<Contact />} />
      </Routes>
      <Navbar />
    </div>
    </BrowserRouter>
  );
}

export default App;
