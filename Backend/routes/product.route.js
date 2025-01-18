const express = require("express");
const productRouter = express.Router();
const product_controller = require("../controllers/product/product.controller");
const { requireAuth } = require("../middlewares/auth.middleware");
const { fileUploadMiddleware } = require("../middlewares/fileUpload.middleware");

productRouter.route("/create").post(requireAuth, fileUploadMiddleware("uploads/products"), product_controller.createProduct);
productRouter.route("/update").put(requireAuth, fileUploadMiddleware("uploads/products"), product_controller.updateProduct);
productRouter.route("/all").get(requireAuth, product_controller.allProduct);
productRouter.route("/:productId").get(requireAuth, product_controller.viewProduct);
productRouter.route("/delete/:productId").delete(requireAuth, product_controller.deleteProduct);
productRouter.route("/feature/:productId").patch(requireAuth, product_controller.makeFeature); //make feature and unFeature

module.exports = {productRouter}