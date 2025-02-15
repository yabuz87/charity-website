import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainHome from './components/home/MainHome';
import Footer from "./components/Footer/Footer"
import About from './components/about/About';
import BlogAndNews from "./components/Blogs/BlogAndNews"
import Signup from './components/SignUp/Signup';
import Login from "./components/SignUp/Login";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<MainHome/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signupOrlogin" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/blog" element={<BlogAndNews/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
