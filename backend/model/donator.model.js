import mongoose from "mongoose";

const donatorSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    country: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const donator = mongoose.model("Donator", donatorSchema);
export default donator;
