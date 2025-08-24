import React, { useState, useRef, useEffect } from 'react';
import { X, Clock, Mail, CheckCircle, AlertCircle, Contact } from 'lucide-react';
import api from '../../Configs/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginOtp = ({ loginData, isopen, onclose }) => {

    const navigate = useNavigate()
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState('');
    const [timeLeft, setTimeLeft] = useState(600); 
    const [success, setSuccess] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (isopen) {
            setOtp(['', '', '', '', '', '']);
            setError('');
            setTimeLeft(600);
            setSuccess(false);
            if (inputRefs.current[0]) {
                setTimeout(() => inputRefs.current[0].focus(), 100);
            }
        }
    }, [isopen]);

    useEffect(() => {
        let timer;
        if (isopen && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [isopen, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError('');

        // Auto-focus to next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }

    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                // Move to previous input if current is empty
                inputRefs.current[index - 1].focus();
            } else if (otp[index]) {
                // Clear current input if it has a value
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            // Navigate left with arrow key
            inputRefs.current[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < 5) {
            // Navigate right with arrow key
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^\d+$/.test(pastedData)) {
            const newOtp = pastedData.split('').slice(0, 6);
            setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);

            const lastFilledIndex = Math.min(5, newOtp.length - 1);
            if (inputRefs.current[lastFilledIndex]) {
                inputRefs.current[lastFilledIndex].focus();
            }
        }
    };

    const handleSubmit = async (otpValue = null) => {
        const code = otpValue || otp.join('');

        if (code.length !== 6) {
            setError('Please enter the complete 6-digit code');
            const firstEmptyIndex = otp.findIndex(digit => digit === '');
            if (firstEmptyIndex !== -1 && inputRefs.current[firstEmptyIndex]) {
                inputRefs.current[firstEmptyIndex].focus();
            }
            return;
        }

        setIsVerifying(true);

        try {
            const otpString = otp.join('');

            const Data = {
                email: loginData.email,
                password: loginData.password,
                otp: otpString,
            };

            const res = await api.post("/auth/login", Data);
            toast.success(res.data.message)
            navigate("/userDashBoard")
            setSuccess(true);
            setTimeout(() => {
                onclose();
            }, 2000);
        } catch (err) {
            // Handle API error response
            const errorMessage = err.response?.data?.message || err.message || 'Invalid verification code';
            setError(errorMessage);

            // Clear OTP on error for security
            setOtp(['', '', '', '', '', '']);
            if (inputRefs.current[0]) {
                inputRefs.current[0].focus();
            }
        } finally {
            setIsVerifying(false);
        }
    };

    if (!isopen) { return null }

    const handleResendOtp = async () => {
        setIsResending(true);
        try {
            const res = await api.post("/auth/SendOtpforlogin", loginData);
            setOtp(['', '', '', '', '', '']);
            setTimeLeft(600);
            setError('');
            if (inputRefs.current[0]) {
                inputRefs.current[0].focus();
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to resend code. Please try again.';
            setError(errorMessage);
        } finally {
            setIsResending(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-neutral/60 flex items-center justify-center p-4 z-50">
            <div className="bg-base-100 rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-base-200">
                    <h2 className="text-xl font-semibold text-primary">Verify Your Email</h2>
                    <button
                        onClick={onclose}
                        className="p-1 rounded-full hover:bg-base-200 transition-colors"
                        aria-label="Close verification modal"
                    >
                        <X size={20} className="text-base-content" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {success ? (
                        <div className="text-center py-8">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                                    <CheckCircle size={32} className="text-success-content" />
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-base-content mb-2">Verification Successful!</h3>
                            <p className="text-base-content text-opacity-70">Your email has been verified successfully.</p>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-2">
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 bg-info rounded-full flex items-center justify-center">
                                        <Mail size={20} className="text-info-content" />
                                    </div>
                                </div>
                                <p className="text-base-content text-opacity-70 mb-4">
                                    Enter the 6-digit code sent to <br />
                                    <span className="font-medium text-base-content">{loginData?.email}</span>
                                </p>
                            </div>

                            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                                <div className="flex justify-between gap-2 mb-6">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            onPaste={index === 0 ? handlePaste : undefined}
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            className="w-12 h-12 text-center text-lg font-semibold border border-info rounded-lg focus:border-primary focus:ring-2 focus:ring-primary outline-none text-base-content transition-all"
                                            disabled={isVerifying}
                                            aria-label={`Digit ${index + 1} of verification code`}
                                        />
                                    ))}
                                </div>

                                {error && (
                                    <div className="mb-4 p-3 bg-error text-error-content rounded-lg text-sm flex items-center">
                                        <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                                        <span className="flex-1">{error}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isVerifying || otp.join('').length !== 6}
                                    className="w-full py-3 px-4 bg-accent text-accent-content font-medium rounded-lg hover:bg-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isVerifying ? (
                                        <span className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                                            Verifying...
                                        </span>
                                    ) : (
                                        'Verify Code'
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <div className="flex items-center justify-center text-sm text-base-content text-opacity-70 mb-2">
                                    <Clock size={16} className="mr-1" />
                                    <span>Code expires in {formatTime(timeLeft)}</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleResendOtp}
                                    disabled={timeLeft > 540 || isResending}
                                    className="text-success hover:text-success hover:text-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed text-sm transition-colors flex items-center justify-center mx-auto"
                                >
                                    {isResending ? (
                                        <>
                                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current mr-2"></div>
                                            Resending...
                                        </>
                                    ) : (
                                        'Resend Code'
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <div className="bg-base-200 px-6 py-4 border-t border-base-300">
                    <p className="text-xs text-base-content text-opacity-70 text-center">
                        Didn't receive the email? Check your spam folder or try again.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginOtp;