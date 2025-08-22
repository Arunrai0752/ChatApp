import mongoose from "mongoose";
import User from "../Models/userModel.js";
import bcrypt from "bcrypt";



export const userRegister = async (req, res, next) => {

    const { name, email, password, username, agreeToTerms } = req.body;


    try {

        if (!name || !email || !password || !username) {

            return res.status(500).json({ message: "All fields are required " })
        }

        if (!agreeToTerms) {
            return res.status(400).json({ success: false, message: "You must agree to terms" });
        }

        const existingEmail = await User.findOne({ email });

        const existingUserName = await User.findOne({ username });

        if (existingEmail) {
            return res.status(400).json({ message: "Email already exist" })
        }

        if (existingUserName) {
            return res.status(400).json({ message: "UserName already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            username,
            agreeToTerms,
        })

        return res.status(200).json({message: "User Registered Successfully"});

    } catch (error) {

        console.error("Register Error:", error.message);
        return res.status(500).json({ success: false, message: "Server error, please try again" });

        next(error)
    }

}


export const userLogin = async (req , res, next ) => {



    const {email , password} = req.body;

    try {
        
        if(!email || !password){

            return res.status(500).json({message: "All Fields Require"})
        }

    } catch (error) {
        
    }
    

}