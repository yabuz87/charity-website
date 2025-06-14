import React, { useState, useEffect } from 'react';
import "./home.css";
import useGetStore from '../store/useGetStore';
import { useDeleteStore } from "../store/useDeleteStore.js";

const Home = () => {
  const { galleryData, projectData, blogData, getProjects, getGalleries, getBlogs } = useGetStore();
  const { deleteGallery, deleteBlog, deleteProject } = useDeleteStore();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('gallery');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ id: null, type: null });

  const handleDeleteClick = (id, type) => {
    setItemToDelete({ id, type });
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    setShowDeleteConfirm(false);
    setDeletingId(itemToDelete.id);
    try {
      if (itemToDelete.type === 'gallery') {
        await deleteGallery(itemToDelete.id);
      } else if (itemToDelete.type === 'project') {
        await deleteProject(itemToDelete.id);
      } else if (itemToDelete.type === 'blog') {
        await deleteBlog(itemToDelete.id);
      }
    } catch (error) {
      console.error(`Error deleting ${itemToDelete.type}:`, error);
    } finally {
      setDeletingId(null);
      setItemToDelete({ id: null, type: null });
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setItemToDelete({ id: null, type: null });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBlogs();
        await getGalleries();
        await getProjects();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [getBlogs, getGalleries, getProjects]);

  if (loading) {
    return <div className="loading-container"><p>Loading...</p></div>;
  }

  const renderCard = (item, type) => (
    <div key={item._id} className="content-card">
      <img
        src={item.photo}
        alt={`${type} ${item._id}`}
        className="card-image"
      />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-actions">
          <button 
            className="action-btn delete-btn"
            onClick={() => handleDeleteClick(item._id, type)}
            title="Delete"
            disabled={deletingId === item._id}
          >
            {deletingId === item._id ? (
              <i className="bi bi-arrow-clockwise loading-icon"></i>
            ) : (
              <i className="bi bi-trash3-fill"></i>
            )}
          </button>
          <button 
            className="action-btn edit-btn"
            title="Edit"
            disabled={deletingId === item._id}
          >
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-container">
      {/* Mobile Header */}
      {isMobile && (
        <div className="mobile-header">
          <button 
            className="hamburger-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="bi bi-list"></i>
          </button>
          <h3 className="mobile-title">Admin Panel</h3>
        </div>
      )}

      {/* Sidebar */}
      <div className={`admin-sidebar ${isMobile ? (sidebarOpen ? 'mobile-open' : '') : ''}`}>
        {!isMobile && <h3 className="sidebar-title">Admin Panel</h3>}
        <ul className="sidebar-menu">
          <li 
            className={`menu-item ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('gallery');
              if (isMobile) setSidebarOpen(false);
            }}
          >
            <i className="bi bi-images"></i> Gallery
          </li>
          <li 
            className={`menu-item ${activeTab === 'project' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('project');
              if (isMobile) setSidebarOpen(false);
            }}
          >
            <i className="bi bi-folder"></i> Projects
          </li>
          <li 
            className={`menu-item ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('blog');
              if (isMobile) setSidebarOpen(false);
            }}
          >
            <i className="bi bi-file-earmark-text"></i> Blogs
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="delete-confirm-modal">
          <div className="delete-confirm-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this {itemToDelete.type}? This action cannot be undone.</p>
            <div className="delete-confirm-buttons">
              <button className="confirm-btn" onClick={handleConfirmDelete}>
                {deletingId === itemToDelete.id ? (
                  <i className="bi bi-arrow-clockwise loading-icon"></i>
                ) : (
                  "Delete"
                )}
              </button>
              <button className="cancel-btn" onClick={handleCancelDelete} disabled={deletingId === itemToDelete.id}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`admin-content ${isMobile ? 'mobile-content' : ''}`}>
        {activeTab === 'gallery' && (
          <>
            <h2 className="content-title">Gallery</h2>
            <p className="content-subtitle">These are uploaded galleries</p>
            <div className="card-container">
              {galleryData?.length > 0 ? (
                galleryData.map(item => renderCard(item, 'gallery'))
              ) : (
                <p className="no-content">No galleries available.</p>
              )}
            </div>
          </>
        )}

        {activeTab === 'project' && (
          <>
            <h2 className="content-title">Projects</h2>
            <p className="content-subtitle">These are uploaded projects</p>
            <div className="card-container">
              {projectData?.length > 0 ? (
                projectData.map(item => renderCard(item, 'project'))
              ) : (
                <p className="no-content">No projects available.</p>
              )}
            </div>
          </>
        )}

        {activeTab === 'blog' && (
          <>
            <h2 className="content-title">Blogs</h2>
            <p className="content-subtitle">These are uploaded blogs</p>
            <div className="card-container">
              {blogData?.length > 0 ? (
                blogData.map(item => renderCard(item, 'blog'))
              ) : (
                <p className="no-content">No blogs available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;