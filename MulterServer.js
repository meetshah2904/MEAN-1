const express = require('express')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/x-png") {
            cb(null, true);
        } else {
            cb(null, false);
            cb(new Error("Valid Extension are only jpeg and png "))
        }
    },
    limits: { fileSize: 5632002 }
})
const app = express()

app.post('/signup', upload.single('profilepic'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    res.json({ msg: "SignupDone", status: 200, data: "Signup Done" })
})
app.listen(9999)