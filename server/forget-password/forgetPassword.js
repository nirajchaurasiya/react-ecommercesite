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
const sendEmail = async (email, subject, emailContent) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        html: emailContent
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
            const tokenExpirationTime = Date.now() + 600000; // Set token expiration time to 1 hour from now

            // Set the reset_pass fields in the user document
            user.reset_pass.six_digit_random_num = sixDigitRandomNum;
            user.reset_pass.token_expiration_time = tokenExpirationTime;

            // Save the user document
            await user.save();


            const subject = "Password Reset"
            const emailContent = `
                <h1>Password Reset</h1>
                <p>Hello,</p>
                <p>You have requested to reset your password. Please use the following token to proceed:</p>
                <h2>${sixDigitRandomNum}</h2>
                <p>This token will expire after a certain period of time.</p>
                <p>If you did not request this password reset, please ignore this email.</p>
                <p>Thank you.</p>
            `;
            sendEmail(email, subject, emailContent)
            res.json({ status: 1, message: 'Reset password information saved.' });
        }
        else {
            res.json({ status: 0, message: "Email doesn't exits" });
        }
    } catch (error) {
        console.log(error);
        res.json({ status: 2, message: 'Internal server error.' });
    }
});

Router.post('/check-token', async (req, res) => {
    const { email, token } = req.body;

    try {
        // Find the user based on the email
        const user = await UserModel.findOne({ email });

        // Check if the token matches and is not expired
        if (user.reset_pass.six_digit_random_num === token && user.reset_pass.token_expiration_time > Date.now()) {
            res.json({ status: 1, message: 'OTP is valid' });
        } else {
            res.json({ status: 0, message: "OTP is invalid or expired." });
        }
    } catch (error) {
        console.log(error);
        res.json({ status: 2, message: 'Internal server error.' });
    }
});

// API route for updating password
Router.post('/update-password', async (req, res) => {
    const { email, token, newPassword } = req.body;

    try {
        // Find the user based on the email
        const user = await UserModel.findOne({ email });

        // Check if the token matches and is not expired
        if (user.reset_pass.six_digit_random_num === token && user.reset_pass.token_expiration_time > Date.now()) {
            // Update the password
            user.password = newPassword;
            // Clear the reset_pass fields
            user.reset_pass.six_digit_random_num = undefined;
            user.reset_pass.token_expiration_time = undefined;

            // Save the user document
            await user.save();

            res.json({ status: 1, message: 'Password updated successfully.' });
        } else {
            res.json({ status: 0, message: 'Token is invalid or expired.' });
        }
    } catch (error) {
        console.log(error);
        res.json({ status: 2, message: 'Internal server error.' });
    }
});


module.exports = Router;