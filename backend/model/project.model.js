import mongoose from "mongoose"
const projectsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String,   
        }

},{Timestamps:true});
const projects=mongoose.model("Project",projectsSchema);
export default projects