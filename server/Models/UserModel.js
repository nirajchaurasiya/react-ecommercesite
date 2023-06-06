const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserModel = mongoose.Schema({
    fname: {
        required: true,
        type: String,
    },
    lname: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String
    },

    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
    },
    address3: {
        type: String,
    },
    profile: {
        type: String,
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    productOrders:
        [
            {
                _id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                productImage: {
                    type: String,
                    required: true
                },
                time: {
                    type: Date,
                    required: true
                },
                orderID: {
                    type: String,
                    required: true
                },
                status: {
                    type: Boolean,
                    required: true
                }
            }
        ]
},
    {
        timestamps: true
    }
)


UserModel.pre('save', async function (next) {
    // Only hash the password if it has been modified by the user
    if (!this.isModified('password')) {
        return next();
    }
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});
module.exports = mongoose.model('userdata', UserModel);