import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/Navbar';

import Carousel from './components/Carousel/Carousel';
import images from './assets/img.js';
import About from './components/about/About.jsx';
import ImageSlider from './components/home/ImageSlider.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <ImageSlider/>
    </div>
  );
}

export default App;
