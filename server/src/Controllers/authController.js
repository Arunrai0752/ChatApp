import mongoose from "mongoose";
import User from "../Models/userModel.js";
import bcrypt from "bcrypt";
import gentoken from "../Utils/auth.js"
import OTP from "../Models/otpModel.js";
import sendEmail from "../Utils/sendEmail.js";


const genDummyImage = (fullName) => {
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 56) + 200;
    const b = Math.floor(Math.random() * 56) + 200;

    const randomColor = `#${[r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")}`;

    const initials = fullName
        .trim()
        .split(" ")
        .map((word) => word[0]?.toUpperCase())
        .slice(0, 2)
        .join("");

    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        initials
    )}&background=${randomColor.slice(1)}&color=fff&size=360&bold=true&rounded=true`;
};




export const userRegister = async (req, res, next) => {

    const { name, email, password, username, otp } = req.body;



    try {




        const fetchOtp = await OTP.findOne({ email });
        console.log(fetchOtp);
        console.log(otp);





        if (fetchOtp) {
            const isOtpValid = await bcrypt.compare(otp, fetchOtp.otp)
            if (!isOtpValid) {
                const error = new Error("Invalid OTP");
                error.statusCode = 409;
                return next(error)
            }
            await OTP.deleteOne({ email })
        }
        else {
            const error = new Error("OTP EXpired !!! Try Again. ")
            error.statusCode = 400;
            return next(error);
        }




        const hashedPassword = await bcrypt.hash(password, 10);
        const photo = genDummyImage(name);





        const newUser = await User.create({
            name,
            email,
            username,
            password: hashedPassword,
            type: "normalUser",
            photo,
            twoStepVerify: false,

        });

        res.status(201).json({
            message: "User registered Successfully",
            data: newUser
        })



    } catch (error) {

        console.error("Register Error:", error.message);
        return res.status(500).json({ success: false, message: "Server error, please try again" });
        next(error)
    }

}



export const sendOtpForRegister = async (req, res, next) => {




    try {




        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            const error = new Error("All fields are required");
            error.statusCode = 400;
            return next(error);
        }




        const otp = Math.floor(100000 + Math.random() * 900000);
        const hashOTP = await bcrypt.hash(otp.toString(), 10);




        try {
            const oldOtp = await OTP.findOneAndDelete({ email });
            console.log(oldOtp);
        } catch (error) {
            console.log("No previous OTP found, proceeding to create a new one.");
        }




        await OTP.create({
            email,
            otp: hashOTP,
            purpose: 'emailVerification'
        });
        const subject = "Verify Your ChatApp Registration";
        const message = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                <div style="text-align: center; padding: 20px 0;">
                    <h2 style="color: #333;">ChatApp Pvt. Ltd.</h2>
                    <h1 style="color: #333; margin-bottom: 20px;">Email Verification Code</h1>
                    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <p style="font-size: 16px; color: #666; margin-bottom: 20px;">
                            Your verification code is:
                        </p>
                        <h2 style="font-size: 32px; color: #4CAF50; letter-spacing: 5px; margin: 20px 0;">
                            ${otp}
                        </h2>
                        <p style="font-size: 14px; color: #999; margin-top: 20px;">
                            This code will expire in 10 minutes. Please do not share this code with anyone.
                        </p>
                    </div>
                    <p style="font-size: 14px; color: #666; margin-top: 20px;">
                        If you didn't request this code, please ignore this email.
                    </p>
                </div>
            </div>
        `;




        try {
            await sendEmail(email, subject, message);
        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            const error = new Error("Failed to send verification email");
            error.statusCode = 500;
            return next(error);
        }





        res.status(200).json({
            message: "OTP sent successfully",
        });
    } catch (error) {

        next(error);
    }
};


export const userLogin = async (req, res, next) => {

    try {
        const { email, password, otp } = req.body;

        if (!email || !password || !otp) {
            const error = new Error("Please fill all the fields");
            error.statusCode = 400;
            return next(error);
        }


        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }



        const isVerified = await bcrypt.compare(password, existingUser.password);
        if (!isVerified) {
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            return next(error);
        }


        if (otp !== "N/A" && existingUser.twoStepVerify === true) {

            const fetchOtp = await OTP.findOne({ email });

            if (fetchOtp) {
                const isOtpValid = await bcrypt.compare(otp, fetchOtp.otp)

                if (!isOtpValid) {
                    const error = new Error("Invalid OTP");
                    error.statusCode = 401;
                    return next(error)
                }
                await OTP.deleteOne({ email })
            } else {
                const error = new Error("OTP EXpired !!! Try Again. ")
                error.statusCode = 400;
                return next(error);
            }

        }

        gentoken(existingUser._id, res)
        res.status(200).json({
            success: true,
            message: `Welcome back ${existingUser.name}`,
            data: existingUser
        })

    } catch (error) {
        console.error("Login error:", error);
        if (error.message.includes("data and hash arguments required")) {
            error.message = "Authentication error - invalid password comparison";
            error.statusCode = 500;
        }
        next(error);
    }
}



export const sendOtpForlogin = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            const error = new Error("All fields are required");
            error.statusCode = 400;
            return next(error);
        }

        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error("User not Registred");
            error.statusCode = 404;
            return next(error);

        }


        const verifyUser = await bcrypt.compare(password, user.password)
        if (!verifyUser) {
            const error = new Error("Password Does Not match");
            error.statusCode = 404;
            return next(error);

        }


        console.log(user.twoStepVerify);
        
        if (user.twoStepVerify === false) {
            req.body.otp = "N/A";
            console.log("Starting Login");
            return userLogin(req, res, next);

        }


        const otp = Math.floor(100000 + Math.random() * 900000);
        const hashOTP = await bcrypt.hash(otp.toString(), 10);



        try {
            const oldOtp = await OTP.findOneAndDelete({ email });
            console.log(oldOtp);
        } catch (error) {
            console.log("No previous OTP found, proceeding to create a new one.");
        }


        await OTP.create({
            email,
            otp: hashOTP,
            purpose: 'twoFactorAuth'
        });

        const subject = "Verify Your ChatApp Registration";
        const message = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                <div style="text-align: center; padding: 20px 0;">
                    <h2 style="color: #333;">ChatApp Pvt. Ltd.</h2>
                    <h1 style="color: #333; margin-bottom: 20px;">Email Verification Code</h1>
                    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <p style="font-size: 16px; color: #666; margin-bottom: 20px;">
                            Your verification code is:
                        </p>
                        <h2 style="font-size: 32px; color: #4CAF50; letter-spacing: 5px; margin: 20px 0;">
                            ${otp}
                        </h2>
                        <p style="font-size: 14px; color: #999; margin-top: 20px;">
                            This code will expire in 10 minutes. Please do not share this code with anyone.
                        </p>
                    </div>
                    <p style="font-size: 14px; color: #666; margin-top: 20px;">
                        If you didn't request this code, please ignore this email.
                    </p>
                </div>
            </div>
        `;

        try {
            await sendEmail(email, subject, message);
        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            const error = new Error("Failed to send verification email");
            error.statusCode = 500;
            return next(error);
        }

        res.status(200).json({
            message: "OTP sent successfully",
        });

    } catch (error) {
        next(error);
    }
}





export const GoogleLogin = async (req, res, next) => {
    try {
        const fullName = req.body.name;
        const email = req.body.email;
        const Gid = req.body.id;


        if (!fullName || !email || !Gid) {
            const error = new Error("All fields Required");
            error.statusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            const hashedId = await bcrypt.hash(Gid, 10);
            const photo = genDummyImage(fullName)

            const newUser = await User.create({
                fullName,
                email,
                googleId: hashedId,
                type: "googleUser",
                photo,
            });
            gentoken(newUser._id, res);
            res.status(200).json({ message: "Login Sucessfully", data: newUser });
        } else if (existingUser && existingUser.type === "normalUser") {
            const hashedId = await bcrypt.hash(Gid, 10);

            existingUser.googleId = hashedId;
            existingUser.type = "googleUser";

            await existingUser.save();
            gentoken(existingUser, res);

            res
                .status(200)
                .json({ message: "Login Sucessfully", data: existingUser });
        } else {
            const isVerified = await bcrypt.compare(Gid, existingUser.googleId);
            if (!isVerified) {
                const error = new Error("Invalid credentials");
                error.statusCode = 401;
                return next(error);
            }

            gentoken(existingUser, res);

            res
                .status(200)
                .json({ message: "Login Sucessfully", data: existingUser });
        }
    } catch (error) {
        next(error);
    }
};