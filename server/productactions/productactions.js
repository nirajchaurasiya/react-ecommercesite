const Router = require('express').Router();
const productMulter = require('../multer/ProductImage');
const ProductModel = require('../Models/ProductModel');
const UpdatesModel = require('../Models/UpdatesModel');

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

        res.send({ status: 1, msg: 'Success' });
    } catch (error) {
        res.send({ status: 0, msg: 'Error' });
    }
});


Router.get('/getproducts', async (req, res) => {
    try {
        const getAllProducts = await ProductModel.find();
        res.send({ status: 1, msg: 'Success', data: getAllProducts });
    } catch (error) {
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
});

Router.get('/getproducts/:id', async (req, res) => {
    try {
        const getAllProducts = await ProductModel.findOne({ _id: req.params.id });
        res.send({ status: 1, msg: 'Success', data: getAllProducts });
    } catch (error) {
        res.send({ status: 0, msg: 'Something went wrong.' });
    }
});


module.exports = Router;
