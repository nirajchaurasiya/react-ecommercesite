const nodemailer = require('nodemailer');
const Router = require('express').Router();
require('dotenv').config();
var transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const sendEmail = async (email, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Password reset route
Router.post('/forget-password', (req, res) => {
    const { email } = req.body;

    // Generate reset token and set expiration time

    // Save reset token and expiration time in the user document

    // Send password reset email
    const subject = 'Password Reset';
    const text = 'Here is your password reset link.';
    sendEmail(email, subject, text);

    // Return success response
    res.status(200).json({ message: 'Password reset email sent.' });
});
module.exports = Router;