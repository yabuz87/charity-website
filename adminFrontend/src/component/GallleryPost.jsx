import React,{useState} from 'react'
import { usePostStore } from "../store/usePostStore.js";
const GallleryPost = () => {
     const { uploadGallery,isGalleryUploadLoading } = usePostStore();
      const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        photo: null
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
          ...projectData,
          [name]: value
        });
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = () => {
          const base64Image = reader.result;
          setProjectData({
            ...projectData,
            photo: base64Image
          });
        };
        reader.readAsDataURL(file);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create a new FormData object
        const formData = new FormData();
        // Append the title and description to the FormData object
        formData.append('title', projectData.title);
        formData.append('description', projectData.description);
        // Append the photo if it exists
        if (projectData.photo) {
          formData.append('photo', projectData.photo);
        }
    console.log(projectData);
        // Upload the project using the uploadProject function
        uploadGallery(formData);
      };
    
      return (
        <>
          <h3 className="text-center">Post on Gallery Section</h3>
          <form className="text-center" onSubmit={handleSubmit}>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="Your title" 
                style={{width: "50%"}} 
                onChange={handleInputChange} 
              />
            </p>
            <textarea 
              name="description" 
              rows="23" 
              cols="100" 
              onChange={handleInputChange}
            ></textarea>
            <p>
              <input 
                type="file" 
                name="photo" 
                onChange={handleImageUpload} 
              />
            </p>
            <button className="btn btn-success px-3">Submit</button>
          </form>
        </>
  )
}

export default GallleryPost
