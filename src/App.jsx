import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import images from './assets/img.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel images={images} />
    </div>
  );
}

export default App;
