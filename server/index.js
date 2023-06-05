const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
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
    // origin: 'https://twiittr.netlify.app'
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('uploads'))
app.use('/api/auth', require('./auth/auth'));
app.get('/', (req, res) => {
    res.send({ "msg": "success" })
})
app.listen(PORT, () => {
    console.log(`Backend is running on ${PORT}`)
})