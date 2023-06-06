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
            _id: String,
            name: String,
            date: String,
            profile: String,
            questions: String,
            answers: String,
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
                time: {
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
                            time: {
                                type: Date,
                            },
                        }
                    ]
            }
        ],

}, { timestamps: true })
module.exports = mongoose.model('productmodel', ProductModel);