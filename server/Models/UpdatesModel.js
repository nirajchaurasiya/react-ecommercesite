const mongoose = require('mongoose');
const UpdatesModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    pid: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('updates', UpdatesModel);