const express = require('express')
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const helmet = require('helmet')
app.use(morgan("common"));
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT
app.use(bodyParser.json());
app.use(express.json());
require('./connection/conn')
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
const corsOptions = {
    // origin: 'https://onlinedukan.netlify.app'
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('uploads'))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use('/api/auth', require('./auth/auth'));
app.use('/api/productactions', require('./productactions/productactions'));
app.use('/api/personactions', require('./personactions/personactions'));
app.use('/api/updates', require('./updates/updates'));
app.get('/', (req, res) => {
    res.send({ "msg": "success" })
})
app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`)
})