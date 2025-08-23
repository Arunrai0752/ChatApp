import nodemailer from "nodemailer";

const sendEmail  = async (to , subject , message ) => { 

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSCODE
            },

        })


        const mailOptions = {
            from:process.GMAIL_USER,
            to,
            subject,
            html: message,
        }

        await transporter.sendMail(mailOptions);
        console.log('email Sent Successfully');
        return true;
        
        
    } catch (error) {
        
        console.log("email  not sent");
        return false;

        
    }

}


export default sendEmail;