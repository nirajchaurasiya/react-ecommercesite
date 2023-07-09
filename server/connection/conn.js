const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

// Set the strictQuery option
mongoose.set('strictQuery', false);

try {
    console.log("Connecting....")
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(`Connected Successfully`);
        })
        .catch((err) => {
            console.log(`Some error occurred` + err);
        });
} catch (error) {
    console.log(error);
}
