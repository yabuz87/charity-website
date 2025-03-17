import React, { useEffect, useState, useCallback } from 'react';
import "./blog.css";
import img from '../../assets/doug-linstedt-jEEYZsaxbH4-unsplash.jpg';
import useGetStore from '../store/useGetStore';
import { LoaderIcon } from 'react-hot-toast';

const BlogAndNews = () => {
  const { blogData, isBlogsLoading, getBlogs } = useGetStore();
  const [expanded, setExpanded] = useState({});
  const [arrayIndex, setArrayIndex] = useState(0);

  // Memoized getBlogs to prevent unnecessary re-renders
  const fetchBlogs = useCallback(() => {
    getBlogs();
  }, [getBlogs]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown Date'; // Fallback for undefined date
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // getUTCMonth() returns 0-11
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getFirstFiveSentences = (text) => {
    if (!text) return ''; // Fallback for undefined or null text
    const sentences = text.split('.').filter((sentence) => sentence.trim() !== '');
    return sentences.slice(0, 5).join('. ') + (sentences.length > 5 ? '...' : '');
  };

  const chooseToRead = (arrayIndex) => {
    if (!blogData || !blogData[arrayIndex]) {
      return <p>No blog post selected.</p>; // Fallback if arrayIndex is out-of-bounds
    }

    const blog = blogData[arrayIndex];
    return (
      <div className="container-fluid" key={blog.id}>
        <div className="image-div-central-side">
          <img
            className="img-fluid"
            style={{ width: "100%", borderRadius: "20px" }}
            src={blog.photo}
            alt={blog.title}
          />
        </div>
        <h4>{blog.title}</h4>
        <p>Uploaded Date: {formatDate(blog.createdAt)}</p>
        <p>{blog.description}</p>
        <div className="blog-footer">
          <div></div>
        </div>
      </div>
    );
  };

  const handleArrayIndexChange = (index) => {
    setArrayIndex(index);
  };

  return isBlogsLoading ? (
    <div><LoaderIcon /></div>
  ) : (
    <div className="blog-section container-lg">
      <div className="centeral-section">
        {chooseToRead(arrayIndex)}
      </div>
      <div className="right-section">
        {blogData && blogData.length > 0 ? (
          blogData.map((item, index) => (
            <div
              className="container-fluid mb-3"
              key={item.id || index} // Use unique id if available
              onClick={() => handleArrayIndexChange(index)}
            >
              <div className="image-div-left-side">
                <img
                  className="img-fluid"
                  style={{ width: "100%" }}
                  src={item.photo}
                  alt={item.title}
                />
              </div>
              <h4>{item.title}</h4>
              <p>Uploaded Date: {formatDate(item.createdAt)}</p>
              <p>
                {expanded[index]
                  ? item.description
                  : getFirstFiveSentences(item.description)}
              </p>
              {item.description.split('.').filter((sentence) => sentence.trim() !== '').length > 5 && (
                <button className="btn mb-2" onClick={(e) => {
                  e.stopPropagation(); // Prevent parent `onClick` from triggering
                  handleReadMore(index);
                }}>
                  {expanded[index] ? 'Read Less' : 'Read More'}
                </button>
              )}
              <div className="blog-footer">
                <div></div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center fs-4" style={{}}>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogAndNews;
