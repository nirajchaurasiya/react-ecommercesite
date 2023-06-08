const mongoose = require('mongoose')
const ProductModel = mongoose.Schema({
    pictures: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    price: {
        type: String,
    },
    category: {
        type: String,
    },
    conversation: [
        {
            question: String,
            answer: {
                type: String,
                default: ""
            },
            name: String,
            date: {
                type: Number,
                default: Date.now() * 100000
            }
        },
    ],
    reviews:
        [
            {
                name: String,
                comment: String,
                _id: String,
                profile: String,
                support: [String],
                date: {
                    type: Date,
                },
                reply:
                    [
                        {
                            name: String,
                            comment: String,
                            _id: String,
                            profile: String,
                            support: [String],
                            date: {
                                type: Date,
                            },
                        }
                    ]
            }
        ],

}, { timestamps: true })
module.exports = mongoose.model('productmodel', ProductModel);