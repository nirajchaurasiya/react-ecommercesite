const Router = require('express').Router();
const userImage = require('../multer/userImage');
const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt')
Router.post('/register', userImage.single('profile'), async (req, res) => {
    try {
        const userDatas = req.body;
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
                password: userDatas.password
            });
            res.send({ code: 1, msg: "Account Registered Successfully." });
        } else {
            res.send({ code: 0, msg: "All the input fields are mandatory. Pleas fill all the fields before submitting the form." });
        }
    } catch (error) {
        res.send({ code: 0, msg: error });
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
                    res.send({ code: 1, msg: "Account Registered Successfully.", data: isEmailFound });
                }
                else {
                    res.send({ code: 0, msg: "Invalid Credentials" });
                }
            }
            else {
                res.send({ code: 0, msg: "Invalid Credentials" });
            }
        } else {
            res.send({ code: 0, msg: "All the input fields are mandatory. Pleas fill all the fields before submitting the form." });
        }
    } catch (error) {
        res.send({ code: 0, msg: "Some error occured. Please try again later." });
    }
})



module.exports = Router