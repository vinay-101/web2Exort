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

// Category
productRouter.route("/category").post(product_controller.createCategory);
productRouter.route('/category/all').get(requireAuth, product_controller.allCategory);

// subCategory
productRouter.route("/create/sub-cateogry").post(product_controller.createSubCategory);
productRouter.route("/sub-category/all").get(product_controller.allSubCategory);

module.exports = {productRouter}