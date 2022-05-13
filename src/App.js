import React from 'react'
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <div className="App">
        
        <Home />
        <About />
        <Contact />
        <Navbar />
    </div>
  );
}

export default App;
