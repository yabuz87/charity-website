import Blogs from "../model/blogs.model.js";
import Gallery from "../model/gallery.model.js";
import cloudinary from "../lib/cloudinary.js"
import Project from "../model/project.model.js"

export const postBlog = async (req, res) => {
    try {
        const { description, title, photo} = req.body;
        
                
                if(!photo)
                {
                    return res.status(404).json({"message":"profile picture is required"});
                }
              const uploadResponse= await cloudinary.uploader.upload(photo);
        const newblog = new Blogs({
            description,
            title,
            photo
        });
        await newblog.save();
        res.status(201).json(newblog);
        console.log("Blog saved successfully");
    } catch (error) {
        res.status(400).json({ "message": error.message });
        console.log("There is an error in ", error.message);
    }
};
export const postGallery=async (req,res)=>{
   try {
      
        const {photo,text,title}=req.body;
        const newGallery=new Gallery({
            photo,
            text,
            title
        });
         await newGallery.save();
        res.status(201).json({newGallery});
        console.log(" Gallery successfully added");

     } catch (error){
        res.status(500).json({"message":error.message});
        console.log("there is error in postGallery Method");
      
   }
}
export const postProject=async(req,res)=>{
    
    try {
        const {title,photo,description}=req.body;
        const newProject=new Project({
            title,
            photo,
            description,
        });
        await newProject.save();
        res.status(201).json(newProject);
        
        
    } catch (error){
        res.status(500).json({"message":error.message});
        console.log("there is error in postProject",error.message);
        
    }

}
