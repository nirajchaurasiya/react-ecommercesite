const Router = require('express').Router();
const UpdatesModel = require('../Models/UpdatesModel');

Router.get('/getallupdates', async (req, res) => {
    try {
        const getAllUpdates = await UpdatesModel.find();
        res.status(200).send({ status: 1, data: getAllUpdates });
    } catch (error) {
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
})
module.exports = Router;