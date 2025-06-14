import React, { useState } from 'react';
import { usePostStore } from "../store/usePostStore.js";
import { LoaderIcon } from "react-hot-toast";

const GalleryPost = () => {
  const { uploadGallery, isGalleryUploadLoading } = usePostStore();
  const [galleryData, setGalleryData] = useState({
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
      setGalleryData({ ...galleryData, photo: base64Image });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadGallery(galleryData);
    setGalleryData({ title: "", description: "", photo: null });
  };

  return (
    <div className="gallery-upload-container">
      <div className="gallery-upload-card">
        <h2 className="gallery-upload-title">Upload to Gallery</h2>
        <p className="gallery-upload-subtitle">Share your images with the community</p>
        
        <form onSubmit={handleSubmit} className="gallery-upload-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Image title"
              value={galleryData.title}
              onChange={(e) => setGalleryData({ ...galleryData, title: e.target.value })}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Tell the story behind this image..."
              value={galleryData.description}
              onChange={(e) => setGalleryData({ ...galleryData, description: e.target.value })}
              className="form-textarea"
              rows="6"
              required
            />
          </div>
          
          <div className="image-upload-section">
            <label className="image-upload-label">
              <div className="upload-area">
                {galleryData.photo ? (
                  <div className="image-preview">
                    <img src={galleryData.photo} alt="Preview" className="preview-image" />
                  </div>
                ) : (
                  <>
                    <svg className="upload-icon" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    <span>Click to upload image</span>
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
            disabled={isGalleryUploadLoading || !galleryData.photo}
          >
            {isGalleryUploadLoading ? (
              <span className="button-loading">
                <LoaderIcon style={{ marginRight: '8px' }} />
                Uploading...
              </span>
            ) : (
              'Publish to Gallery'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GalleryPost;

// CSS Styles
const styles = `
.gallery-upload-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
}

.gallery-upload-card {
  width: 100%;
  max-width: 700px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: transform 0.2s ease;
}

.gallery-upload-title {
  color: #2d3748;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
}

.gallery-upload-subtitle {
  color: #718096;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.gallery-upload-form {
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
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: #f8fafc;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.image-upload-section {
  margin: 1.5rem 0;
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
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  background-color: #f8fafc;
  transition: all 0.2s ease;
  text-align: center;
  color: #718096;
}

.upload-area:hover {
  border-color: #4f46e5;
  background-color: #f0f4ff;
}

.upload-icon {
  width: 48px;
  height: 48px;
  fill: #a0aec0;
  margin-bottom: 1rem;
}

.file-input {
  display: none;
}

.image-preview {
  width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
}

.preview-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
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
  .gallery-upload-card {
    padding: 1.5rem;
  }
  
  .gallery-upload-title {
    font-size: 1.5rem;
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