const nodemailer = require('nodemailer');
const Router = require('express').Router();
require('dotenv').config();
const UserModel = require('../Models/UserModel');
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


// API route for resetting password
Router.post('/forget-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Find the user based on the email
        const user = await UserModel.findOne({ email });

        if (user) {
            // Generate 6-digit random number and set token expiration time
            const sixDigitRandomNum = Math.floor(100000 + Math.random() * 900000).toString();
            const tokenExpirationTime = Date.now() + 3600000; // Set token expiration time to 1 hour from now

            // Set the reset_pass fields in the user document
            user.reset_pass.six_digit_random_num = sixDigitRandomNum;
            user.reset_pass.token_expiration_time = tokenExpirationTime;

            // Save the user document
            await user.save();

            res.status(200).json({ message: 'Reset password information saved.' });
            const subject = "Password Reset"
            const text = `Hello sir, you requested your password reset request. Your code is below ${sixDigitRandomNum}`;
            sendEmail(email, subject, text)
        }
        else {
            res.status(500).json({ message: "Email doesn't exits" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

Router.post('/reset-password', async (req, res) => {
    const { email, code, newPassword } = req.body;

    try {
        // Find the user based on the email
        const user = await UserModel.findOne({ email });

        // Check if code is valid and within the token expiration time
        const {
            six_digit_random_num,
            token_expiration_time,
        } = user.reset_pass;

        if (
            six_digit_random_num !== code ||
            token_expiration_time < Date.now()
        ) {
            return res.status(400).json({ message: 'Invalid or expired reset code.' });
        }

        // Reset password and clear reset_pass fields
        user.password = newPassword;
        user.reset_pass.six_digit_random_num = undefined;
        user.reset_pass.token_expiration_time = undefined;

        // Save the user document
        await user.save();

        res.status(200).json({ message: 'Password reset successful.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = Router;