import React from 'react';
import "./blog.css";
import img from '../../assets/doug-linstedt-jEEYZsaxbH4-unsplash.jpg';
import JSONfile from "../../assets/blogPost.json";

const BlogAndNews = () => {
  return (
    <div className="blog-section-container container-lg row">
      <div className="left-section col-md-8">
        {
          JSONfile.map((item, index) => (
            <div className="container-fluid" key={index}>
              <img className="img" src={img} alt="Charity" />
              <h4>{item.title}</h4>
              <p>{item.article}</p>
              <div className="blog-footer">
                <div></div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="right-section col-md-3">
        <p>side bar here</p>
      </div>
    </div>
  );
};

export default BlogAndNews;
