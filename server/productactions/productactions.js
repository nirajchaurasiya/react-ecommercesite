const Router = require('express').Router();
const productMulter = require('../multer/ProductImage');
const ProductModel = require('../Models/ProductModel');
const UpdatesModel = require('../Models/UpdatesModel');
const mongoose = require('mongoose');
Router.get('/searchproduct/:query', async (req, res) => {
    try {
        const query = req.params.query; // Get the search query from the request parameters

        if (!query) {
            return res.status(400).json({ error: 'Search query is missing' });
        }

        const keywords = query.split(' '); // Split the search query into individual keywords

        // Create an array of regex patterns for each keyword
        const regexPatterns = keywords.map(keyword => new RegExp(keyword, 'i'));

        // Perform the search logic using Mongoose
        const results = await ProductModel.find({
            $or: [
                { title: { $in: regexPatterns } },
                { desc: { $in: regexPatterns } },
                { category: { $in: regexPatterns } }
            ]
        });

        res.json({ status: 1, msg: results });
    } catch (error) {
        res.json({ status: 0, msg: 'Something went wrong.' });
    }
});

module.exports = Router;




Router.post('/addproduct', productMulter.array('pictures'), async (req, res) => {
    try {
        let product = new ProductModel({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            category: req.body.category,
        });

        if (req.files) {
            let path = '';
            req.files.forEach(function (file, index, arr) {
                path = path + file.path + ',';
            });
            path = path.substring(0, path.lastIndexOf(','));
            product.pictures = path;
        }
        await product.save();

        const productID = await product._id;
        if (productID) {
            let updates = new UpdatesModel({
                title: product.title,
                desc: product.desc,
                price: product.price,
                category: product.category,
                pid: productID,
                image: product.pictures,
                price: product.price,
            });
            await updates.save();
        }

        res.status(200).send({ status: 1, msg: 'Success' });
    } catch (error) {
        res.send({ status: 0, msg: 'Error' });
    }
});


Router.get('/getproducts', async (req, res) => {
    try {
        const getAllProducts = await ProductModel.find();
        res.status(200).send({ status: 1, msg: 'Success', data: getAllProducts });
    } catch (error) {
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
});

Router.get('/getproducts/:id', async (req, res) => {
    try {
        const getAllProducts = await ProductModel.findOne({ _id: req.params.id });
        res.status(200).send({ status: 1, msg: 'Success', data: getAllProducts });
    } catch (error) {
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
});


Router.post('/addquestions', async (req, res) => {
    try {
        const { pid, name, question } = req.body
        await ProductModel.findByIdAndUpdate(pid, { $push: { conversation: { name, question } } });
        const findProductWithId = await ProductModel.findById(pid);
        res.status(200).send({ status: 1, msg: findProductWithId });
    } catch (error) {
        res.send({ status: 0, msg: error });
    }
})


Router.post('/addcomment', async (req, res) => {
    try {
        const { _id, name, comment, profile, pid } = req.body
        const findProduct = await ProductModel.findById(pid);
        const date = findProduct.updatedAt;
        await ProductModel.findByIdAndUpdate(pid, { $push: { reviews: { name, _id, comment, profile, date } } });
        const findProductWithId = await ProductModel.findById(pid);
        res.status(200).send({ status: 1, msg: findProductWithId });
    } catch (error) {
        res.send({ status: 0, msg: error });
    }
})

Router.post('/supporttoproduct', async (req, res) => {
    try {
        const { uid, pid, reviewID } = req.body;

        console.log('Support ID:', uid); // Add this line
        console.log('Review ID:', reviewID);
        console.log('Product ID:', pid); // Add this line

        await ProductModel.findOneAndUpdate(
            { 'reviews._id': reviewID },
            { $addToSet: { 'reviews.$.support': uid } },
            { new: true }
        );
        res.status(200).send({ status: 1, msg: "Support updated successfully" });
    } catch (error) {
        console.log('Error:', error); // Add this line

        res.send({ status: 0, msg: error });
    }
});


Router.get('/getproducts/category/:query', async (req, res) => {
    try {
        const getAllProducts = await ProductModel.find({ category: req.params.query });
        res.status(200).send({ status: 1, msg: 'Success', data: getAllProducts });
    } catch (error) {
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
});


Router.post(`/postanswers/:questionID`, async (req, res) => {
    try {
        const { questionID } = req.params;
        const { answer } = req.body;
        console.log(questionID);
        console.log(answer);

        if (!mongoose.Types.ObjectId.isValid(questionID)) {
            res.send({ status: 0, msg: 'Invalid questionID' });
            return;
        }

        const findProductID = await ProductModel.findOneAndUpdate(
            { 'conversation._id': questionID },
            { $set: { 'conversation.$.answer': answer } },
            { new: true }
        );

        console.log(findProductID);
        if (findProductID) {
            res.status(200).send({ status: 1, msg: "Answered successfully" });
        }
    } catch (error) {
        console.error(error);
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
});

module.exports = Router;
