import blogs from "../model/blogs.model.js";
import Gallery from "../model/gallery.model.js";
import Project from "../model/project.model.js";

export const deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedItem = await Gallery.findByIdAndDelete(id);
        
        if (!deletedItem) {
            return res.status(404).json({ "message": "Gallery not found" });
        }
        
        return res.status(200).json(deletedItem);
        
    } catch (error) {
        res.status(500).json({ "message": error.message });
        console.error("There is an error in deleteGallery:", error.message);
    }
}
