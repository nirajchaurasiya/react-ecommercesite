const Router = require('express').Router();
const UserModel = require('../Models/UserModel');

Router.get('/getuser/:uid', async (req, res) => {
    try {
        const isUserExist = await UserModel.findOne({ _id: req.params.uid });
        if (isUserExist) {
            const data = isUserExist.toObject();
            delete data.password;
            delete data.tokens;
            delete data.isAdmin;
            res.send({ status: 1, data: data })
        }
        else {
            res.send({ status: 0, msg: "User doesn't exists" })
        }
    } catch (error) {
        res.send({ status: 0, msg: "User doesn't exists" })
    }
})




module.exports = Router;