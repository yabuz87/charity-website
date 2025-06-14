import React, { useState } from 'react';
import { usePostStore } from "../store/usePostStore.js";
import { LoaderIcon } from 'react-hot-toast';

const ProjectPost = () => {
  const { uploadProject, isProjectUploadLoading } = usePostStore();
  const [projectData, setProjectData] = useState({ 
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
      setProjectData({ ...projectData, photo: base64Image });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadProject(projectData);
    setProjectData({ title: "", description: "", photo: null });
  };

  return (
    <div className="project-post-container">
      <div className="project-post-card">
        <h3 className="project-post-title">Project and Impact Post</h3>
        
        <form onSubmit={handleSubmit} className="project-post-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Project title"
              value={projectData.title}
              onChange={(e) => setProjectData({...projectData, title: e.target.value})}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Describe your project and its impact..."
              value={projectData.description}
              onChange={(e) => setProjectData({...projectData, description: e.target.value})}
              className="form-textarea"
              required
            />
          </div>
          
          <div className="form-group file-upload-container">
            <label className="file-upload-label">
              <input 
                type="file" 
                name="photo" 
                onChange={handleImageUpload} 
                className="file-upload-input"
                accept="image/*"
              />
              <span className="file-upload-button">
                {projectData.photo ? 'Change Image' : 'Upload Project Image'}
              </span>
              {projectData.photo && (
                <span className="file-upload-name">
                  Image selected
                </span>
              )}
            </label>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isProjectUploadLoading}
          >
            {isProjectUploadLoading ? (
              <span className="loading-indicator">
                <LoaderIcon style={{ marginRight: '8px' }} />
                Uploading...
              </span>
            ) : (
              'Publish Project'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectPost;

// CSS Styles
const styles = `
.project-post-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f8fafc;
}

.project-post-card {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: transform 0.2s ease;
}

.project-post-title {
  color: #1e293b;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.project-post-form {
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
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-input {
  height: 3rem;
}

.form-textarea {
  min-height: 300px;
  resize: vertical;
}

.file-upload-container {
  margin: 1rem 0;
}

.file-upload-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.file-upload-input {
  display: none;
}

.file-upload-button {
  padding: 0.75rem 1.5rem;
  background-color: #f1f5f9;
  color: #334155;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px dashed #cbd5e1;
  text-align: center;
}

.file-upload-button:hover {
  background-color: #e2e8f0;
}

.file-upload-name {
  font-size: 0.875rem;
  color: #64748b;
}

.submit-button {
  padding: 1rem 2rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #4f46e5;
}

.submit-button:disabled {
  background-color: #a5b4fc;
  cursor: not-allowed;
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .project-post-card {
    padding: 1.5rem;
  }
  
  .project-post-title {
    font-size: 1.5rem;
  }
  
  .form-textarea {
    min-height: 200px;
  }
}
`;

// Add styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);