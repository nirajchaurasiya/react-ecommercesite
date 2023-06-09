const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userdata',
            required: true
        },
        orderItems: [
            {
                pid: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'productmodel',
                    required: true
                },
                name: {
                    type: String,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1
                },
                price: {
                    type: String,
                    required: true
                }
            }
        ],
        orderDate: {
            type: Date,
            default: Date.now()
        },
        status: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('order', OrderSchema);
