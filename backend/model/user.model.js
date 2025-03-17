import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: ""
    },
    membership: {
        type: String,
        enum: ["permanent", "temporary"],
        required: true
    }
}, { timestamps: true });

const users = mongoose.model("User", userSchema);
export default users;
