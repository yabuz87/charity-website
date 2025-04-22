import express from "express";
import { deleteBlog, deleteGallery, deleteProject } from "../adminController/deleteController.js";
import { protectRoute } from "../middleware/admin.middleware.js";
const deleteRouters=express.Router();
deleteRouters.delete("/deleteGallery/:id",protectRoute,deleteGallery);
deleteRouters.delete("/deleteProject/:id",protectRoute,deleteProject);
deleteRouters.delete("deleteBlog/:id",protectRoute,deleteBlog);
// 67e7f39cea35926632107948
export default deleteRouters;