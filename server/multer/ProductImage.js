const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/productimage')
    },
    filename: function (req, file, cb) {
        console.log(req);
        cb(null, Date.now() + file.originalname)
    }
});


const upload = multer({ storage: storage });
module.exports = upload;