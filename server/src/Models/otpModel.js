import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
    // Hashed OTP for security
    otp: {
        type: String,
        required: true,
    },
    // Associated email
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600, // 10 minutes in seconds
    },
    usedAt: {
        type: Date,
        default: null,
    },
    
    purpose: {
        type: String,
        required: true,
        enum: ['passwordReset', 'emailVerification', 'twoFactorAuth', 'accountRecovery'],
    },
    isUsed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });


const OTP = mongoose.model('OTP', OtpSchema);
export default OTP;