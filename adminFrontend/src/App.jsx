import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import { Toaster } from 'react-hot-toast';
import BlogPostPage from './component/BlogPostPage';
import ProjectPost from './component/ProjectPost';
import Login from './component/loginPage/Login';
import Signup from './component/loginPage/Signup';
import { useAuthStore } from './store/useAuthStore';
import Home from './component/Home';
import GalleryPost from './component/GallleryPost';

const App = () => {
  const { authUser } = useAuthStore();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={authUser ? <Signup />: <Navigate to="/login" />}/>
        <Route path="/uploadgallery" element={authUser ? <GalleryPost /> : <Navigate to="/login" />} />
        <Route path="/uploadblog" element={authUser ? <BlogPostPage /> : <Navigate to="/login" />} />
        <Route path="/uploadproject" element={authUser ? <ProjectPost /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;