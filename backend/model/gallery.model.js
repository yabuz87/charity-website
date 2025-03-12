import mongoose from "mongoose";
const gallerySchema=mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    text:{
        type:String,
        default:""
    },
    title:{
        type:String,
        default:""
    }
},{Timestamps:true})

const gallery=mongoose.model("Gallery",gallerySchema);
export default gallery;