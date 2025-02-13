import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainHome from './components/home/MainHome';
import Footer from "./components/Footer/Footer"
import About from './components/about/About';
import Signup from './components/SignUp/Signup';
import Login from "./components/SignUp/Login";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<MainHome/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signupOrlogin" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
