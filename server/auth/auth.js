const Router = require('express').Router();
require('dotenv').config();
const userImage = require('../multer/userImage');
const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');



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


Router.post('/register', userImage.single('profile'), async (req, res) => {
    try {
        const userDatas = req.body;
        const isEmailFound = await UserModel.findOne({ email: req.body.email });
        if (!isEmailFound) {
            if (userDatas.fname || userDatas.lname || userDatas.email || userDatas.phone || userDatas.password) {
                await UserModel.create({
                    fname: userDatas.fname,
                    lname: userDatas.lname,
                    email: userDatas.email,
                    phone: userDatas.phone,
                    address1: userDatas.address1,
                    address2: userDatas.address2,
                    address3: userDatas.address3,
                    profile: req.file.path,
                    password: userDatas.password,
                    isAdmin: userDatas.isAdmin,
                });
                const email = userDatas.email;
                const subject = 'Account Created Successfully';
                const emailContent = `
                        <!DOCTYPE html>
                            <html>
                            <head>
                            <meta charset="UTF-8">
                            <title>Account Created Successfully</title>
                            <style>
                                body {
                                background-color: #f2f2f2;
                                font-family: Arial, sans-serif;
                                }
                                .container {
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                background-color: #ffffff;
                                border-radius: 5px;
                                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                                }
                                h1 {
                                color: #333333;
                                }
                                p {
                                color: #666666;
                                }
                                .button {
                                display: inline-block;
                                padding: 10px 20px;
                                background-color: #4CAF50;
                                color: #ffffff;
                                text-decoration: none;
                                border-radius: 3px;
                                }
                            </style>
                            </head>
                            <body>
                            <div class="container">
                                <h1>Account Created Successfully</h1>
                                <p>Your account has been successfully created. Welcome aboard! 🎉</p>
                                <p>Click the button below to go to your profile:</p>
                                <a href="https://www.example.com/profile" class="button">Go to Profile</a>
                            </div>
                            </body>
                        </html>`;
                sendEmail(email, subject, emailContent)
                res.send({ status: 1, msg: "Account Registered Successfully." });
            } else {
                res.send({ status: 0, msg: "All the input fields are mandatory. Pleas fill all the fields before submitting the form." });
            }
        } else {
            res.send({ status: 0, msg: "A user with this email already exists." });
        }
    } catch (error) {
        res.send({ status: 0, msg: "Some error occured. Please try again later." });
    }
})

Router.post('/login', async (req, res) => {
    try {
        let token;
        const userDatas = req.body;
        const enteredPassword = userDatas.password;
        const email = userDatas.email;
        if (email || enteredPassword) {
            const isEmailFound = await UserModel.findOne({ email: email });
            if (isEmailFound) {
                const originalPassword = isEmailFound.password;
                const isPasswordMatch = await bcrypt.compare(enteredPassword, originalPassword);
                if (isPasswordMatch) {
                    const data = isEmailFound.toObject(); // Convert Mongoose document to plain JavaScript object
                    token = await isEmailFound.generateAuthToken();
                    res.send({ status: 1, msg: "Successfully login to your account. Redirecting you to the profile page within 2 seconds..", data: data._id });
                } else {
                    res.send({ status: 0, msg: "Invalid Credentials" });
                }
            } else {
                res.send({ status: 0, msg: "Invalid Credentials" });
            }
        } else {
            res.send({ status: 0, msg: "All the input fields are mandatory. Please fill all the fields before submitting the form." });
        }
    } catch (error) {
        console.log(error)
        res.send({ status: 0, msg: "Some error occurred. Please try again later." });
    }
});

Router.post('/adminlogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isEmailExist = await UserModel.findOne({ email: email });
        if (isEmailExist) {
            if (isEmailExist.isAdmin === true) {
                const isPasswordmatch = await bcrypt.compare(password, isEmailExist.password)
                if (isPasswordmatch) {
                    delete isEmailExist.password
                    res.send({ status: 1, msg: "Successfully login to your account. Redirecting you to the profile page within 2 seconds..", data: isEmailExist });
                }
                else {
                    res.send({ status: 0, msg: "Invalid Credentials" });
                }
            }
            else {
                res.send({ status: 0, msg: "Invalid Credentials" });
            }
        }
        else {
            res.send({ status: 0, msg: "Invalid Credentials" });
        }
    } catch (error) {
        res.send({ status: 0, msg: "Something went wrong!" });
    }
})


module.exports = Router