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
const Category = require("../../models/product/Category");
const SubCategory = require("../../models/product/SubCategory");
const DownSubCategory = require("../../models/product/DownSubcategory");
const User = require("../../models/user/User");

const createProduct = async (req, res) => {
  try {
    // Validate request body
    const validationResult = await productSchema.validateAsync(req.body);
    let {
      categoryId,
      subCategoryId,
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

    // Ensure brochure file is uploaded
    if (!req.files.brochure || req.files.brochure.length === 0) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "Product brochure is required, please add."));
    }

    // Ensure product images are uploaded
    if (!req.files.images || req.files.images.length === 0) {
      return res
        .status(HttpStatus.FORBIDDEN.code)
        .send(new Response(false, "Product images are required, please add."));
    }

    // Parse specifications if provided
    if (specifications) {
      specifications = JSON.parse(specifications);
    }

    // Create product
    const product = await Product.create({
      userId: req.userId,
      categoryId,
      subCategoryId,
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
      brochure: `brochures/${req.files.brochure[0].filename}`, // Brochure file path
    });

    // Save product images to ProductImage table
    if (product) {
      const productImages = req.files.images.map((file) => ({
        productId: product.id,
        image: `products/${file.filename}`, // Image file path
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


// const createProduct = async (req, res) => {
//   try {
//     const validationResult = await productSchema.validateAsync(req.body);
//     let {
//       categoryId,
//       subCategoryId,
//       title,
//       brand,
//       model,
//       material,
//       coi,
//       description,
//       unitType,
//       minQuantity,
//       maxQuantity,
//       price,
//       acceptedPayment,
//       businessType,
//       processLeadTime,
//       processLeadTimeUnit,
//       packageType,
//       packageQuantity,
//       packageUnit,
//       deliveryTime,
//       nearestPort,
//       specifications,
//     } = validationResult;


//     // if(!req.file){
//     //   return res
//     //   .status(HttpStatus.FORBIDDEN.code)
//     //   .send(new Response(false, "Product brochure is required, please add."));
//     // }

//     if (specifications) {
//       specifications = JSON.parse(specifications);
//     }

//     // Validate if files are provided
//     if (!req.files || req.files.length === 0) {
//       return res
//         .status(HttpStatus.FORBIDDEN.code)
//         .send(new Response(false, "Product images are required, please add."));
//     }

//     // Create product
//     const product = await Product.create({
//       userId: req.userId,
//       categoryId,
//       subCategoryId,
//       title,
//       brand,
//       model,
//       material,
//       coi,
//       description,
//       unitType,
//       minQuantity,
//       maxQuantity,
//       price,
//       acceptedPayment,
//       businessType,
//       processLeadTime,
//       processLeadTimeUnit,
//       packageType,
//       packageQuantity,
//       packageUnit,
//       deliveryTime,
//       nearestPort,
//       brochure: req.file && `brochures/${req.file.filename}`,
//     });

//     // Save images to ProductImage table
//     if (product) {
//       const productImages = req.files.map((file) => ({
//         productId: product.id,
//         image: `products/${file.filename}`,
//       }));

//       await ProductImage.bulkCreate(productImages);
//     }

//     // Save specifications to ProductSpecification table
//     if (product && specifications && Array.isArray(specifications)) {
//       const productSpecifications = specifications.map((spec) => ({
//         productId: product.id,
//         key: spec.key,
//         value: spec.value,
//       }));
//       await ProductSpecification.bulkCreate(productSpecifications);
//     }

//     return res
//       .status(HttpStatus.CREATED.code)
//       .send(
//         new Response(true, `Product ${HttpStatus.CREATED.message}`, product)
//       );
//   } catch (error) {
//     return helpers.validationHandler(res, error);
//   }
// };

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

    if (!size) size = 5;
    else size = parseInt(size);
    if (!page) page = 1;
    else page = parseInt(page);
    let skip = size * (parseInt(page) - 1);

    let products;
    let total;
    if (type == 'Featured') {
      products = await Product.findAll({
        where: {
          userId: req.userId,
          isFeatured: true,
        },
        include:[
          {
            model: ProductImage,
            attributes:['id', 'image']
          },
          {
            model: Category
          }
        ],
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
        include:[
          {
            model: ProductImage,
            attributes:['id', 'image']
          },
          {
            model: Category,
            attributes:['id', 'name']
          }
        ],
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

    let featuredProductCount = await Product.count({
      where:{
        userId: req.userId,
        isFeatured: true,
      }
    });

    let productsCount = await Product.count({
      where:{
        userId: req.userId,
        isFeatured: false,
      }
    })

    const data = {
      totalPages: Math.ceil(total / size),
      totalRecords: total,
      totalCount: total,
      featuredProductCount,
      productsCount,
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
      include:[
        {
          model: ProductSpecification,
        },
        {
          model: ProductImage,
          attributes:['id', 'image']
        },
        {
          model: Category
        }
      ],
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

    if(product.status === false){
      return res
      .status(HttpStatus.FORBIDDEN.code)
      .send(new Response(false, "Currently your product is inactive, wait for admin approval.")); 
    }

    if (product.isFeatured === false) {
      await product.update({ isFeatured: true });
    } else {
      await product.update({ isFeatured: false });
    }

    product
      ? res
          .status(HttpStatus.UPDATED.code)
          .send(
            new Response(true, `Product has been featured`, product)
          )
      : res
          .status(HttpStatus.FORBIDDEN.code)
          .send(new Response(true, `Product ${HttpStatus.FORBIDDEN.message}`));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    let category = await Category.create({ name });
    return res
      .status(HttpStatus.CREATED.code)
      .send(
        new Response(true, `Category ${HttpStatus.CREATED.message}`, category)
      );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createSubCategory = async (req, res) => {
  try {
    const { categoryId, name } = req.body;

    let category = await SubCategory.create({ categoryId, name });
    return res
      .status(HttpStatus.CREATED.code)
      .send(
        new Response(
          true,
          `SubCategory ${HttpStatus.CREATED.message}`,
          category
        )
      );
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const allCategory = async (req, res) => {
  try {
    let { scope } = req.query;
    let category;
    if (scope) {
      category = await Category.findAll({
        where:{
          name:{
            [Op.like]: `%${scope}%`,
          }
        },
        attributes: ["id", "name"],
      });
      return res
        .status(HttpStatus.OK.code)
        .send(
          new Response(true, `Category ${HttpStatus.OK.message}`, category)
        );
    } else {
      category = await Category.findAll({
        attributes: ["id", "name", "image"],
      });
    }

    return res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `Category ${HttpStatus.OK.message}`, category));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const allSubCategory = async (req, res) => {
  try {
    let category = await SubCategory.findAll({
      attributes: ["id", "categoryId", "name"],
    });
    return res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `Category ${HttpStatus.OK.message}`, category));
  } catch (error) {
    return helpers.validationHandler(res, error);
  }
};

const createDownSubCategory = async(req,res)=>{
  try{
    const {name, categoryId, subCategoryId} = req.body;
    let downSubCategory = await DownSubCategory.create({name, categoryId, subCategoryId});
    return res
      .status(HttpStatus.CREATED.code)
      .send(
        new Response(true, `DownSubCategory ${HttpStatus.CREATED.message}`, downSubCategory)
      );

  }catch(error){
    return helpers.validationHandler(res, error);
  }
}

const allDownSubCategory = async(req,res)=>{
  try{
    const downSubCategory = await DownSubCategory.findAll({
      attributes: ["id", "categoryId", "subCategoryId", "name"],
    });

    return res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `DownSubCategory ${HttpStatus.OK.message}`, downSubCategory));

  }catch(error){
    return helpers.validationHandler(res, error);
  }
}

const dashboard = async (req, res) => {
  
  try{
    const totalEnquires = 0;
    const totalProduct = await Product.count({
      where:{
        userId: req.userId
      }
    });

    let user = await User.findOne({
      where:{
        id: req.userId
      },
      attributes:['company', 'slug']
    });

    const data = {
      totalEnquires,
      totalProduct,
      companySlug: user.slug,
    }

    return res
      .status(HttpStatus.OK.code)
      .send(new Response(true, `Dashboard ${HttpStatus.OK.message}`, data));

  }catch(error){
    return helpers.validationHandler(res, error);
  }
}


const allCatalogue = async(req,res)=>{
  try{
    let slug = req.params.slug;
    // console.log("slug", slug)
    let user = await User.findOne({
      where:{
        slug
      },
      attributes:['id', 'state', 'city', 'company', "country"]
    });

    if(!user){
      return res
      .status(HttpStatus.FORBIDDEN.code)
      .send(new Response(true, `User not found`));
    }

    console.log("user", user)

    let products = await Product.findAll({
      where:{
        userId: user.id,
        status: true
      },
      include:[
        {
          model: ProductImage,
          attributes:['id', 'image']
        },
        {
          model: Category,
          attributes:['id', 'name']
        }
      ]
    });

    let data = {
      products,
      user: user
    }

    products ? res
    .status(HttpStatus.OK.code)
    .send(new Response(true, `Products ${HttpStatus.OK.message}`, products)) : 
    res
      .status(HttpStatus.FORBIDDEN.code)
      .send(new Response(true, `Dashboard ${HttpStatus.FORBIDDEN.message}`));

  }catch(error){
    return helpers.validationHandler(res, error);
  }
}

module.exports = {
  createProduct,
  updateProduct,
  allProduct,
  viewProduct,
  deleteProduct,
  makeFeature,
  createCategory,
  allCategory,
  createSubCategory,
  allSubCategory,
  createDownSubCategory,
  allDownSubCategory,
  dashboard,
  allCatalogue,
};
