import express from "express";
import Blogs from "../model/blogs.model.js"
import Gallery from "../model/gallery.model.js";
import Project from "../model/project.model.js";
import Admin from "../model/admin.model.js"

export const editGallery=async (req,res)=>
{
    try {

        const adminId=req.user._id;
        const updates=req.body;
        const galleryId=req.params;
        const item=await Gallery.findById(galleryId);
        if(!item)
        {
            return res.status(404).json({"message":"Gallery item not found!"});
        }
        const trueAdmin=await Admin.findById(id);
        if(!adminId || !trueAdmin)
        {
            return res.status(401).json({"message":"unauthorized admin"});
        }
        Object.keys(updates).forEach((key)=>{
            Gallery[key]=updates[key];
        });
        await Gallery.save();
        res.status(200).json({message:"product updated successfully"});


        
    } catch (error) {
        
    }
}

export const editBlog=async (req,res)=>
{
    try {
        
    } catch (error) {
        
    }
};

export const editProject=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
