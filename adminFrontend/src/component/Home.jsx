import React, { useState, useEffect } from 'react';
import "./home.css";
import useGetStore from '../store/useGetStore';
import {useDeleteStore} from "../store/useDeleteStore.js"

const Home = () => {
  const { galleryData, projectData, blogData, getProjects, getGalleries, getBlogs } = useGetStore();
  const {deleteGallery,deleteBlog,deleteProject}=useDeleteStore();
  const [loading, setLoading] = useState(true);
  const handleBlogDelete = (id) => {
    deleteBlog(id);
  };
  const handleProjectDelete = (id) => {
    deleteProject(id);
  }
  const handleGalleryDelete = (id) => {
    deleteGallery(id);
  }


  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBlogs();
        await getGalleries();
        await getProjects();
        setLoading(false); // Stop loading once all data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even if there’s an error
      }
    };
    fetchData();
  }, [getBlogs, getGalleries, getProjects]);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-center">Gallery</h2>
      <p className="text-center">These are uploaded galleries</p>
      <div className="container-fluid image-divs">
        {galleryData?.length > 0 ? (
          galleryData.map((item) => (
            <div key={item._id} className="border rounded-1">
              <img
                src={item.photo}
                alt={`Gallery ${item._id}`}
                className="img-fluid container-fluid"
              />
              <div className="text-center">{item.title}</div>
              <div className='d-flex justify-content-center border'>
              if(!loading){<i className="bi bi-trash3-fill responsive-icon fs-5" onClick={() => handleGalleryDelete(item._id)} style={{ cursor: "pointer" }} data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete"></i>}
              

                  <i className="bi bi-pencil-square fs-5 mx-4"
      style={{ color: "black", cursor:"pointer"}} // Initial style
                 data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="edit">
                             </i>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No galleries available.</p>
        )}
      </div>

      <h2 className="text-center">Project</h2>
      <p className="text-center">These are uploaded projects</p>
      <div className="container-fluid image-divs">
        {projectData?.length > 0 ? (
          projectData.map((item) => (
            <div key={item._id} className="border rounded-1">
              <img
                src={item.photo}
                alt={`Project ${item._id}`}
                className="img-fluid container-fluid"
              />
              <div className="text-center">{item.title}</div>
              <div className='d-flex justify-content-center'>
              <i className="bi bi-trash3-fill responsive-icon fs-5" onClick={() => handleProjectDelete(item._id)} style={{ cursor: "pointer" }} 
                   data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete"></i>
                  <i className="bi bi-pencil-square fs-5 mx-4"
                 style={{ color: "black", cursor:"pointer"}} // Initial style
                 data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="edit">
                             </i>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No projects available.</p>
        )}
      </div>

      <h2 className="text-center">Blog</h2>
      <p className="text-center">These are uploaded blogs</p>
      <div className="container-fluid image-divs">

        {blogData?.length > 0 ? (
          blogData.map((item) => (
            <div key={item._id} className="border rounded-1">
              <img
                src={item.photo}
                alt={`Blog ${item._id}`}
                className="img-fluid container-fluid"
              />
               <div className="text-center">{item.title}</div>
          
              <div className='d-flex justify-content-center'>
              <i className="bi bi-trash3-fill responsive-icon fs-5" onClick={() => handleBlogDelete(item._id)} style={{ cursor: "pointer" }} data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Delete"></i>

            <i className="bi bi-pencil-square fs-5 mx-4"
      style={{ color: "black", cursor:"pointer"}} // Initial style
                 data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="edit">
                             </i>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;