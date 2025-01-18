const Joi = require("joi");
const { CustomMessages } = require("../helper/statusCode");

const productSchema = Joi.object({
  categoryId: Joi.number().integer().required(),
  subCategoryId: Joi.number().integer(), // Allow null with Joi.number()
  name: Joi.string().required(),
  title: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string(), // Allow null with Joi.string()
  material: Joi.string(), // Allow null with Joi.string()
  coi: Joi.number().integer().required(),
  description: Joi.string().required(),
  unitType: Joi.string()
    .valid(
      "Bags",
      "Carton",
      "Dozen",
      "Feet",
      "Kilogram",
      "Meter",
      "Metric Ton",
      "Pieces",
      "Other"
    )
    .required(),
  minQuantity: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({ "number.base": `"minQuantity" should be a number` }),
  maxQuantity: Joi.number() // Ensures maxQuantity is greater than or equal to minQuantity
    .integer()
    .min(Joi.ref("minQuantity"))
    .required()
    .messages({
      "number.base": `"maxQuantity" should be a number`,
      "number.min": `"maxQuantity" must be greater than or equal to "minQuantity"`,
    }),
  price: Joi.number().min(0).required(),
  acceptedPayment: Joi.string()
    .valid("Razorpay", "CcAvenue", "PayPal")
    .required(),
  businessType: Joi.string()
    .valid(
      "Manufacturer",
      "Companies",
      "Trader",
      "Distributor",
      "Reseller",
      "Wholesaler",
      "Service Provider"
    )
    .required(),
  processLeadTime: Joi.string().required(),
  processLeadTimeUnit: Joi.string()
    .valid("Day", "Week", "Month", "Quarter", "Year")
    .required(),
  packageType: Joi.string()
    .valid("Bag", "Carton box", "bottle", "Customised")
    .required(),
  packageQuantity: Joi.number().integer().min(0).required(),
  packageUnit: Joi.string().valid("Pieces", "Kgs", "Litters").required(),
  deliveryTime: Joi.string().required(),
  nearestPort: Joi.number().integer().required(),
  specifications: Joi.string().optional(), // Add specifications as an optional field
});


const productUpdateSchema = Joi.object({
  productId: Joi.number().integer().required(), 
  categoryId: Joi.number().integer().optional(),
  subCategoryId: Joi.number().integer().optional().allow(null), // Allow null for optional fields
  name: Joi.string().optional(),
  title: Joi.string().optional(),
  brand: Joi.string().optional(),
  model: Joi.string().optional().allow(null), // Allow null for optional fields
  material: Joi.string().optional().allow(null), // Fixed typo here
  coi: Joi.number().integer().optional(),
  description: Joi.string().optional(),
  unitType: Joi.string()
    .valid(
      "Bags",
      "Carton",
      "Dozen",
      "Feet",
      "Kilogram",
      "Meter",
      "Metric Ton",
      "Pieces",
      "Other"
    )
    .optional(),
  minQuantity: Joi.number().integer().min(0).optional(),
  maxQuantity: Joi.number()
    .integer()
    .min(0)
    .greater(Joi.ref("minQuantity"))
    .optional(),
  price: Joi.number().min(0).optional(),
  acceptedPayment: Joi.string()
    .valid("Razorpay", "CcAvenue", "PayPal")
    .optional(),
  businessType: Joi.string()
    .valid(
      "Manufacturer",
      "Companies",
      "Trader",
      "Distributor",
      "Reseller",
      "Wholesaler",
      "Service Provider"
    )
    .optional(),
  processLeadTime: Joi.string().optional(),
  processLeadTimeUnit: Joi.string()
    .valid("Day", "Week", "Month", "Quarter", "Year")
    .optional(),
  packageType: Joi.string()
    .valid("Bag", "Carton box", "bottle", "Customised")
    .optional(),
  packageQuantity: Joi.number().integer().min(0).optional(),
  packageUnit: Joi.string().valid("Pieces", "Kgs", "Litters").optional(),
  deliveryTime: Joi.string().optional(),
  nearestPort: Joi.number().integer().optional(),
  specifications: Joi.string().optional()
});

module.exports = productUpdateSchema;

module.exports = { productSchema, productUpdateSchema };
