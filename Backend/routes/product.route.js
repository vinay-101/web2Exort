const express = require("express");
const productRouter = express.Router();
const product_controller = require("../controllers/product/product.controller");
const { requireAuth } = require("../middlewares/auth.middleware");
const { fileUploadMiddleware } = require("../middlewares/fileUpload.middleware");

productRouter.route("/create/product").post(requireAuth, fileUploadMiddleware("uploads/products"), product_controller.createProduct);
productRouter.route("/update/product").put(requireAuth, fileUploadMiddleware("uploads/products"), product_controller.updateProduct);


module.exports = {productRouter}