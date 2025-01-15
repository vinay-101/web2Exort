const multer = require("multer");
const { HttpStatus } = require("../helper/statusCode");
const uuid = require("uuid").v4;
const path = require("path");

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes

/**
 * Creates a file upload middleware with a dynamic file path.
 * @param {string} uploadPath - Path where files should be stored.
 * @param {string} [fieldName="images"] - Field name for the uploaded files.
 * @returns {function} Middleware for handling file uploads.
 */
const fileUploadMiddleware = (uploadPath, fieldName = "images") => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        // Validate file type
        if (!file.mimetype.includes("image")) {
          return cb(new Error("File format not supported"));
        }
        cb(null, uploadPath);
      } catch (err) {
        cb(err);
      }
    },
    filename: (req, file, cb) => {
      const fileName = `${uuid()}${path.extname(file.originalname)}`;
      cb(null, fileName);
    },
  });

  const upload = multer({
    storage,
    limits: { fileSize: MAX_FILE_SIZE },
  }).array(fieldName);

  return (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return res.status(HttpStatus.FILE_UPLOAD_ERROR.code).send({
          success: false,
          msg: err.message,
        });
      }
      next();
    });
  };
};

module.exports = { fileUploadMiddleware };
