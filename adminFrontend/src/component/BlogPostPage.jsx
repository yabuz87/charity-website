import React, { useState } from 'react';
import { usePostStore } from '../store/usePostStore';
import { LoaderIcon } from 'react-hot-toast';

const BlogPostPage = () => {
  const { uploadBlog, isBlogUploadLoading } = usePostStore();
  const [blogData, setBlogData] = useState({ 
    title: "", 
    description: "", 
    photo: null 
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setBlogData({ ...blogData, photo: base64Image });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadBlog(blogData);
    setBlogData({ title: "", description: "", photo: null });
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post-card">
        <div className="blog-post-header">
          <h2 className="blog-post-title">Create New Blog Post</h2>
          <p className="blog-post-subtitle">Share your thoughts and ideas with the world</p>
        </div>
        
        <form onSubmit={handleSubmit} className="blog-post-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Blog post title"
              value={blogData.title}
              onChange={(e) => setBlogData({...blogData, title: e.target.value})}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Write your blog content here..."
              value={blogData.description}
              onChange={(e) => setBlogData({...blogData, description: e.target.value})}
              className="form-textarea"
              required
            />
          </div>
          
          <div className="image-upload-section">
            <label className="image-upload-label">
              <div className="upload-area">
                {blogData.photo ? (
                  <div className="image-preview">
                    <img src={blogData.photo} alt="Blog preview" className="preview-image" />
                    <span className="change-image-text">Change featured image</span>
                  </div>
                ) : (
                  <>
                    <svg className="upload-icon" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    <span>Upload featured image</span>
                    <span className="upload-hint">Recommended size: 1200x630px</span>
                  </>
                )}
                <input 
                  type="file" 
                  name="photo" 
                  onChange={handleImageUpload} 
                  className="file-input"
                  accept="image/*"
                />
              </div>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isBlogUploadLoading}
          >
            {isBlogUploadLoading ? (
              <span className="button-loading">
                <LoaderIcon style={{ marginRight: '8px' }} />
                Publishing...
              </span>
            ) : (
              'Publish Blog Post'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostPage;

// CSS Styles
const styles = `
.blog-post-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.blog-post-card {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: transform 0.2s ease;
}

.blog-post-header {
  margin-bottom: 2rem;
  text-align: center;
}

.blog-post-title {
  color: #1f2937;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.blog-post-subtitle {
  color: #6b7280;
  font-size: 1rem;
}

.blog-post-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: #f9fafb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-input {
  height: 3rem;
}

.form-textarea {
  min-height: 400px;
  resize: vertical;
  line-height: 1.6;
}

.image-upload-section {
  margin: 1rem 0;
}

.image-upload-label {
  display: block;
  cursor: pointer;
}

.upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  text-align: center;
  color: #6b7280;
  position: relative;
}

.upload-area:hover {
  border-color: #4f46e5;
  background-color: #f0f4ff;
}

.upload-icon {
  width: 48px;
  height: 48px;
  fill: #9ca3af;
  margin-bottom: 1rem;
}

.upload-hint {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 0.5rem;
}

.file-input {
  display: none;
}

.image-preview {
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
}

.preview-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.change-image-text {
  color: #4f46e5;
  font-weight: 500;
  font-size: 0.875rem;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #4338ca;
}

.submit-button:disabled {
  background-color: #a5b4fc;
  cursor: not-allowed;
}

.button-loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .blog-post-card {
    padding: 1.5rem;
  }
  
  .blog-post-title {
    font-size: 1.5rem;
  }
  
  .form-textarea {
    min-height: 300px;
  }
  
  .upload-area {
    padding: 1.5rem;
  }
}
`;

// Add styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);