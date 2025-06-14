import bcrypt from "bcrypt";
import users from "../model/user.model.js";
import crypto from 'crypto';
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";
import sendEmail from "../lib/emailService.js";

// Email validation function
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


export const signup = async (req, res) => {
    try {
        const { fullName, email, password, profile, phone, membership } = req.body;

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const userExists = await users.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

        // Store user info + OTP temporarily in memory or a temp collection (or Redis)
        // For now, let's use a simple in-memory map (replace this with a temp DB or cache for production)
        global.pendingUsers = global.pendingUsers || {};
        global.pendingUsers[email] = {
            fullName,
            email,
            password,
            profile,
            phone,
            membership,
            otp,
            otpExpiresAt
        };

        // Send OTP
        const subject = "Verify your Email Address";
        const text = `
Hi ${fullName},

Use the following OTP to verify your email:

🔐 OTP Code: ${otp}

This OTP will expire in 10 minutes.

- CCA Team`;

        await sendEmail(email, subject, text);

        res.status(200).json({ message: "OTP sent to email. Please verify to complete signup." });

    } catch (error) {
        console.error("Error sending OTP:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};


export const verifyAndCreateAccount = async (req, res) => {
    try {
        const { email, otp } = req.body;
        console.log("this is from create account");
       
        console.log(global.pendingUsers?.[email]);
        const tempUser = global.pendingUsers?.[email];

         console.log(`the user otp is ${otp} and the tempUser Otp is ${tempUser.otp}`)
        if (!tempUser) {
            return res.status(400).json({ message: "No OTP request found for this email" });
        }

        if (tempUser.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (Date.now() > tempUser.otpExpiresAt) {
            delete global.pendingUsers[email];
            
            return res.status(400).json({ message: "OTP expired" });
        }

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(tempUser.password, salt);

        const newUser = new users({
            fullName: tempUser.fullName,
            email: tempUser.email,
            password: hashedPassword,
            profile: tempUser.profile,
            phone: tempUser.phone,
            membership: tempUser.membership,
            isVerified: true // Verified by OTP
        });

        await newUser.save();
        delete global.pendingUsers[email]; // cleanup

        generateToken(newUser._id, res); // optional login

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            phone: newUser.phone
        });

    } catch (err) {
        console.error("Account creation failed:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id, res);
        return res.status(200).json({
            _id: user._id,
            email: user.email,
            fullName: user.fullName,
            phone: user.phone,
            membership:user.membership,
            profile:user.profile
        });

    } catch (err) {
        console.log({ message: err.message });
        res.status(500).json({ message: "Internal error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.log("Error in logout controller", err.message);
        res.status(500).json({ message: "Internal error" });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { profile } = req.body;
        const userId = req.user._id;
        if (!profile) {
            return res.status(404).json({ message: "Profile picture is required" });
        }
        const uploadResponse = await cloudinary.uploader.upload(profile);
        const updateUser = await users.findByIdAndUpdate(userId, { profile: uploadResponse.secure_url }, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
