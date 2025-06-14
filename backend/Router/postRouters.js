import express from "express";
import { postBlog, postGallery, postProject } from "../adminController/postPageController.js";
import { protectRoute } from "../middleware/admin.middleware.js";
const postRouter=express();


postRouter.post("/addblog",protectRoute,postBlog);
postRouter.post("/addgallery",protectRoute,postGallery);
postRouter.post("/addProject",protectRoute,postProject);

export default postRouter;
