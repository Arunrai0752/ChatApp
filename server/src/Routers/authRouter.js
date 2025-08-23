import express from "express"; 
import { userRegister ,userLogin , sendOtpForRegister , sendOtpForlogin  } from "../Controllers/authController.js";

const router = express.Router();

router.post("/register" , userRegister )
router.post("/SendOtp" , sendOtpForRegister )
router.post("/SendOtpforlogin" , sendOtpForlogin )
router.post("/login" , userLogin )



export default router ;