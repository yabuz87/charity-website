import mongoose from "mongoose";
const adminSchema=mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: "",
    },
}, { timestamps: true });
export default mongoose.model("Admin",adminSchema);