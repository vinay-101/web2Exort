const express = require("express");
const productRouter = express.Router();
const product_controller = require("../controllers/product/product.controller");
const { requireAuth } = require("../middlewares/auth.middleware");
const { fileUploadMiddleware } = require("../middlewares/fileUpload.middleware");
const {uploadMiddleware } = require("../middlewares/upload.middleware");
// fileUploadMiddleware("uploads/products")

productRouter.route("/create").post(requireAuth, uploadMiddleware, product_controller.createProduct);
productRouter.route("/update").put(requireAuth, fileUploadMiddleware("uploads/products"), product_controller.updateProduct);
productRouter.route("/all").get(requireAuth, product_controller.allProduct);
productRouter.route("/:productId").get(requireAuth, product_controller.viewProduct);
productRouter.route("/delete/:productId").delete(requireAuth, product_controller.deleteProduct);
productRouter.route("/feature/:productId").post(requireAuth, product_controller.makeFeature); //make feature and unFeature

// Category
productRouter.route("/category").post(product_controller.createCategory);
productRouter.route('/category/all').get(product_controller.allCategory);

// subCategory
productRouter.route("/create/sub-cateogry").post(product_controller.createSubCategory);
productRouter.route("/sub-category/all").get(product_controller.allSubCategory);

// DownSubCategory
productRouter.route("/create/down-sub-category").post(product_controller.createDownSubCategory);
productRouter.route("/down-sub-category/all").get(product_controller.allDownSubCategory);

// Dashboard
productRouter.route("/dashboard/data").get(requireAuth, product_controller.dashboard);

// Catalogue
productRouter.route("/catalogue/member/:slug").get(requireAuth, product_controller.allCatalogue);  //list

module.exports = {productRouter}