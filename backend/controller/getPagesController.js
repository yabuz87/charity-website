import express from "express";


export const getHomePage=async(req,res)=>{
    res.json({"message":"this is a home  page"});
}
export const getBlogPage=async(req,res)=>{
    res.json({"message":"this is a logs and news page"});
}
export const getGalleryPage=async(req,res)=>{
    res.json({"message":"this is a Gallery page"});
}
