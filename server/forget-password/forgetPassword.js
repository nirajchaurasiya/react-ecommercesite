const nodemailer = require('nodemailer');
const Router = require('express').Router();
require('dotenv').config();
// Set up Nodemailer transporter
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "7ed5629e12b6a7",
        pass: "663b83b48e4b91"
    }
});

// Send email function
const sendEmail = async (email, subject, text) => {
    // Configure email options
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text
    };

    try {
        // Send email
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