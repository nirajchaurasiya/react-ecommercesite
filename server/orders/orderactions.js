const express = require('express');
const router = express.Router();
const OrderModel = require('../Models/OrdersModel');

router.post('/orders', async (req, res) => {
    const { uid, orderItems } = req.body;

    try {
        const order = new OrderModel({
            uid,
            orderItems,
        });

        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error("An error occurred while creating the order:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/users/:uid/orders', async (req, res) => {
    const { uid } = req.params;

    try {
        const orders = await OrderModel.find({ uid });
        res.json({ status: 1, data: orders });
    } catch (error) {
        console.error("An error occurred while fetching user orders:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/getAllOrders/:uid', async (req, res) => {
    try {
        const findAllOrders = await OrderModel.find();
        res.json({ status: 1, data: findAllOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
