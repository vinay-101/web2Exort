const multer = require("multer");
const { HttpStatus } = require("../helper/statusCode");
const uuid = require("uuid").v4;
const path = require("path");

// Reusable function to create multer storage with dynamic path
const createStorage = (uploadPath) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            if (!file.mimetype.includes("image") && !file.mimetype.includes("video")) {
                return cb(new Error("File format doesn't supported"));
            }
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            const { originalname } = file;
            const fileName = `${uuid()}${path.extname(originalname)}`;
            cb(null, fileName);
        },
    });
};

// Middleware to handle file uploads with dynamic path and fields
const uploadFiles = (uploadPath, fieldsConfig) => {
    const storage = createStorage(uploadPath);
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1 * 1024 * 1024 * 20 // 20MB
        },
    }).fields(fieldsConfig); // Use dynamic fields configuration

    return (req, res, next) => {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
                    success: false,
                    msg: err.message,
                });
            } else if (err) {
                return res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
                    success: false,
                    msg: err.message,
                });
            }
            next(); // Proceed to the next middleware or route handler
        });
    };
};

module.exports = { uploadFiles };