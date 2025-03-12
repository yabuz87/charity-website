import express from "express";
import { deleteGallery } from "../controller/deleteController.js";
const deleteRouters=express.Router();
deleteRouters.delete("/deletegallery/:id",deleteGallery);
export default deleteRouters;