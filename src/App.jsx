import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainHome from './components/home/MainHome';
import Footer from "./components/Footer/Footer"
import About from './components/about/About';
import BlogAndNews from "./components/Blogs/BlogAndNews"
import Signup from './components/SignUp/Signup';
import Login from "./components/SignUp/Login";
import Donate from './components/Donate/Donate';
import Stories from './components/Additional/stories/Stories';
import ProjectAndImpact from './components/Additional/stories/ProjectAndImpact';
import Gallery from './components/Additional/gallery/Gallery';

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
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/stories" element={<Stories/>}/>
      <Route path="/projects" element={<ProjectAndImpact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
