const express = require('express');
const router = express.Router();
const OrderModel = require('../Models/OrdersModel');
const nodemailer = require('nodemailer');
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


router.post('/orders', async (req, res) => {

    try {
        const { uid, orderItems } = req.body;
        const findUser = await UserModel.findById(uid);
        const email = findUser.email;

        console.log(orderItems);
        if (uid) {
            const order = new OrderModel({
                uid,
                orderItems,
            });

            const savedOrder = await order.save();

            const subject = "Order Confirmation"
            let total_Price = 0
            const orderItemsHTML = orderItems.map((item) => {
                const quantity = 1;
                const totalPrice = item.price * 1;
                total_Price += totalPrice;
                return `
                <hr>
                <div class="order-item">
                    <div class="product-details">
                        <h2>${item.name.slice(60)}...</h2>
                        <p>${item.desc.slice(0, 100)}...</p>
                        <p>Quantity: ${quantity}</p>
                        <p>Price: NRs. ${item.price}/item   </p>
                        <p>Total: NRs. ${totalPrice}</p>
                        <a href="https://onlinedukan.netlify.app/product/${item.pid}">
                            <button class="padding:5px; background: black; color:white; border: none; outline: none;">
                                View Item
                            </button>
                        </a>
                    </div>
                </div>
                <hr>
            `;
            }).join('');

            // HTML content of the email
            const emailContent = `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f6f6f6;
                            padding: 20px;
                        }

                        .container {
                            max-width: 600px;
                            background-color: #ffffff;
                            border-radius: 10px;
                            padding: 30px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }

                        h1 {
                            color: #333333;
                        }

                        .order-item {
                            display: flex;
                            margin-bottom: 20px;
                        }

                        .product-image {
                            width: 100px;
                            height: 100px;
                            margin-right: 20px;
                        }

                        .store-homepage {
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    padding: 20px;
                }

                    .store-homepage h1 {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }

                    .store-homepage p {
                        margin-bottom: 15px;
                    }

                    .store-homepage a {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #337ab7;
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                    }

                    .store-homepage a:hover {
                        background-color: #23527c;
                    }
                        .product-image img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 5px;
                        }

                        .product-details {
                            flex-grow: 1;
                        }

                        h2 {
                            margin-bottom: 5px;
                        }

                        p {
                            color: #666666;
                            margin-bottom: 5px;
                        }

                        .total-price {
                            font-weight: bold;
                            font-size: 18px;
                        }

                        .thank-you {
                            text-align: center;
                            margin-top: 30px;
                        }
                    </style>
                </head>
                <body>
                        <div class="container">
                            <div class="store-homepage">
                            <h1>Online Store</h1>
                            <p>Welcome to our online store! Visit our homepage for more products and offers.</p>
                            <a href="https://onlinestore.shop">Go to Store</a>
                            </div>
                        <h1>Your Order Confirmation</h1>
                        <p>This is to confirm that your order has been successfully placed.</p>

                        <div class="order-items">
                            ${orderItemsHTML}
                        </div>

                        <p class="total-price">Total Price: ${Math.floor((total_Price * 1.13) + 200)} <span class="font-size:10px; color:white;"> with VAT and delivery charge.</span> </p>

                        <div class="thank-you">
                            <p>Thank you for choosing our service!</p>
                        </div>
                    </div>
                </body>
            </html>
        `;

            sendEmail(email, subject, emailContent);

            res.status(201).json(savedOrder);
        }
        else {
            res.status(500).json({ error: error.message })
        }
    } catch (error) {
        console.error("An error occurred while creating the order:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/users/:uid/orders', async (req, res) => {

    try {
        const { uid } = req.params;
        if (uid) {
            const orders = await OrderModel.find({ uid });
            res.json({ status: 1, data: orders });
        } else {
            res.status(500).json({ error: error.message });
        }
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
