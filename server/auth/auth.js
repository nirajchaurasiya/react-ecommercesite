const Router = require('express').Router();
const userImage = require('../multer/userImage');
const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt');
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
                    isAdmin: userDatas.isAdmin
                });
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
                    delete data.password; // Remove the password field
                    res.send({ status: 1, msg: "Successfully login to your account. Redirecting you to the profile page within 2 seconds..", data: data });
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

    }
})


module.exports = Router