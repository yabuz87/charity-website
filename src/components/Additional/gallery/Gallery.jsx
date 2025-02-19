import React from 'react';
import GalleryCarouel from './GalleryCarouel';
import "./Gallery.css"
import { data } from "../../../assets/imgs/project";

const Gallery = () => {
  return (
    <div>
      <div className="container-lg image-container">
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={`Project ${index}`}   className="imgs"/>
            <h3>{item.title}
            </h3>
            <p>date: 12/12/2024</p>
            </div>
        ))}
      </div>
      <GalleryCarouel/>
    </div>
  );
};

export default Gallery;
