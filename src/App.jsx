import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './components/home/MainHome.jsx';
import BlogAndNews from './components/Blogs/BlogAndNews.jsx';
import Donate from './components/Donate/Donate.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/blog" element={<BlogAndNews/>}/>
          <Route path="/donate" element={<Donate/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
