const multer = require("multer");
const { HttpStatus } = require("../helper/statusCode");
const uuid = require("uuid").v4;
const path = require("path");

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes

/**
 * File upload middleware for handling brochures and images.
 * Handles predefined fields: 'brochure' (1 file) and 'images' (multiple files).
 */
const uploadMiddleware = (() => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        let uploadPath = "uploads/";

        // Determine the directory based on the field name
        if (file.fieldname === "brochure") {
          uploadPath += "brochures/";
        } else if (file.fieldname === "images") {
          uploadPath += "products/";
        } else {
          return cb(new Error("Unexpected field name"));
        }

        // Validate file type
        if (
          (file.fieldname === "brochure" &&
            !["application/pdf", "image/jpeg", "image/png"].includes(file.mimetype)) ||
          (file.fieldname === "images" && !file.mimetype.includes("image"))
        ) {
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
  }).fields([
    { name: "brochure", maxCount: 1 }, // Single brochure
    { name: "images", maxCount: 10 },   // Multiple images
  ]);

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
})();

module.exports = { uploadMiddleware };
