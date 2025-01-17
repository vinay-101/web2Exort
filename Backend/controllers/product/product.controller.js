const { Op, Sequelize } = require("sequelize");
const helpers = require("../../helper/function");
const Product = require("../../models/product/Product");
const {
  productSchema,
  productUpdateSchema,
} = require("../../validators/product.validator");
const { HttpStatus, CustomMessages } = require("../../helper/statusCode");
const ProductImage = require("../../models/product/ProductImage");
const ProductSpecification = require("../../models/product/ProductSpecifiation");
const Response = require("../../helper/response");

const createProduct = async (req, res) => {
  try {
    const validationResult = await productSchema.validateAsync(req.body);
    let {
      categoryId,
      subCategoryId,
      name,
      title,
      brand,
      model,
      material,
      coi,
      description,
      unitType,
      minQuantity,
      maxQuantity,
      price,
      acceptedPayment,
      businessType,
      processLeadTime,
      processLeadTimeUnit,
      packageType,
      packageQuantity,
      packageUnit,
      deliveryTime,
      nearestPort,
      specifications,
    } = validationResult;

    if (specifications) {
      specifications = JSON.parse(specifications);
    }

    // Validate if files are provided
    if (!req.files || req.files.length === 0) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "Product images are required, please add."));
    }

    // Create product
    const product = await Product.create({
      userId: req.userId,
      categoryId,
      subCategoryId,
      name,
      title,
      brand,
      model,
      material,
      coi,
      description,
      unitType,
      minQuantity,
      maxQuantity,
      price,
      acceptedPayment,
      businessType,
      processLeadTime,
      processLeadTimeUnit,
      packageType,
      packageQuantity,
      packageUnit,
      deliveryTime,
      nearestPort,
    });

    // Save images to ProductImage table
    if (product) {
      const productImages = req.files.map((file) => ({
        productId: product.id,
        image: file.path,
      }));

      await ProductImage.bulkCreate(productImages);
    }

    // Save specifications to ProductSpecification table
    if (product && specifications && Array.isArray(specifications)) {
      const productSpecifications = specifications.map((spec) => ({
        productId: product.id,
        key: spec.key,
        value: spec.value,
      }));
      await ProductSpecification.bulkCreate(productSpecifications);
    }

    return res
      .status(HttpStatus.CREATED.code)
      .send(
        new Response(true, `Product ${HttpStatus.CREATED.message}`, product)
      );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const validationResult = await productUpdateSchema.validateAsync(req.body);
    const {
      productId,
      categoryId,
      subCategoryId,
      name,
      title,
      brand,
      model,
      material,
      coi,
      description,
      unitType,
      minQuantity,
      maxQuantity,
      price,
      acceptedPayment,
      businessType,
      processLeadTime,
      processLeadTimeUnit,
      packageType,
      packageQuantity,
      packageUnit,
      deliveryTime,
      nearestPort,
      specifications,
    } = validationResult;

    // Find the product to be updated
    const product = await Product.findOne({
      where: {
        id: productId,
        userId: req.userId,
      },
    });
    if (!product) {
      return res
        .status(HttpStatus.NOT_FOUND.code)
        .send(new Response(false, "Product not found."));
    }

    // Update product details
    await product.update({
      categoryId,
      subCategoryId,
      name,
      title,
      brand,
      model,
      material,
      coi,
      description,
      unitType,
      minQuantity,
      maxQuantity,
      price,
      acceptedPayment,
      businessType,
      processLeadTime,
      processLeadTimeUnit,
      packageType,
      packageQuantity,
      packageUnit,
      deliveryTime,
      nearestPort,
    });

    // If files are provided, update the product images
    if (req.files && req.files.length > 0) {
      // Delete existing product images
      //   await ProductImage.destroy({ where: { productId: product.id } });

      // Save new images to ProductImage table
      const productImages = req.files.map((file) => ({
        productId: product.id,
        image: file.path,
      }));

      await ProductImage.bulkCreate(productImages);
    }

    // If specifications are provided, update product specifications
    if (specifications && Array.isArray(specifications)) {
      // Delete existing specifications
      //   await ProductSpecification.destroy({ where: { productId: product.id } });

      // Save new specifications to ProductSpecification table
      const productSpecifications = specifications.map((spec) => ({
        productId: product.id,
        key: spec.key,
        value: spec.value,
      }));

      await ProductSpecification.bulkCreate(productSpecifications);
    }

    return res
      .status(HttpStatus.OK.code)
      .send(
        new Response(true, `Product ${HttpStatus.UPDATED.message}`, product)
      );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const allProduct = async (req, res) => {
  try {
    let { page, size, type } = req.query;

    if (!size) size = 12;
    else size = parseInt(size);
    if (!page) page = 1;
    else page = parseInt(page);
    let skip = size * (parseInt(page) - 1);

    let products;
    let total;
    if (type == true) {
      products = await Product.findAll({
        where: {
          userId: req.userId,
          isFeatured: true,
        },
        limit: size,
        offset: skip,
      });

      total = await Product.count({
        where: {
          userId: req.userId,
          isFeatured: true,
        },
      });
    } else {
      products = await Product.findAll({
        where: {
          userId: req.userId,
          isFeatured: false,
        },
        limit: size,
        offset: skip,
      });

      total = await Product.count({
        where: {
          userId: req.userId,
          isFeatured: false,
        },
      });
    }

    const data = {
      totalPages: Math.ceil(total / size),
      totalRecords: total,
      products: products,
    };
    return res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `Product ${HttpStatus.OK.message}`, data));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const viewProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!productId) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "ProductId is required."));
    }

    let product = await Product.findOne({
      where: {
        id: Number(productId),
        userId: req.userId,
      },
    });

    product
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `Product ${HttpStatus.OK.message}`, product))
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(true, `Product ${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    if (!productId) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "ProductId is required."));
    }

    let product = await Product.destroy({
      where: {
        id: Number(productId),
        userId: req.userId,
      },
    });

    product
      ? res
          .status(HttpStatus.OK.code)
          .send(new Response(true, `Product deleted successfully`, product))
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(true, `Product ${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const makeFeature = async (req, res) => {
  try {
    let productId = req.params.productId;

    if (!productId) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "ProductId is required."));
    }

    let product = await Product.findOne({
      where: {
        id: Number(productId),
        userId: req.userId,
      },
    });

    if (!product) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "ProductId not found."));
    }

    if (product.isFeatured === false) {
      await product.update({ isFeatured: true });
    } else {
      await product.update({ isFeatured: false });
    }

    product
    ? res
        .status(HttpStatus.UPDATED.code)
        .send(new Response(true, `Product ${HttpStatus.UPDATED.message}`, product))
    : res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(true, `Product ${HttpStatus.FORBIDDEN.message}`));

  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  allProduct,
  viewProduct,
  deleteProduct,
  makeFeature,
};
