const Router = require('express').Router();
const productMulter = require('../multer/ProductImage');
const ProductModel = require('../Models/ProductModel');

Router.post('/addproduct', productMulter.array('pictures'), async (req, res) => {
    try {
        let product = new ProductModel({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
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
        res.send({ msg: 'Success' });
    } catch (error) {
        res.send({ msg: 'Error' });
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
