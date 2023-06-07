const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
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
    cookie: {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
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

// Generating token
UserModel.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({
            _id: this._id,
        }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoose.model('userdata', UserModel);