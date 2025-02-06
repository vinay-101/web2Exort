const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");
const Category = require("./Category");
const ProductImage = require("./ProductImage");
const ProductSpecification = require("./ProductSpecifiation");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coi: {
      // country of origin
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    unitType: {
      type: DataTypes.ENUM,
      values: [
        "Bags",
        "Carton",
        "Dozen",
        "Feet",
        "Kilogram",
        "Meter",
        "Metric Ton",
        "Pieces",
        "Other",
      ],
      allowNull: false,
    },
    minQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      // in INR
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    acceptedPayment: {
      type: DataTypes.ENUM,
      values: ["Razorpay", "CcAvenue", "PayPal"],
      allowNull: false,
    },
    businessType: {
      type: DataTypes.ENUM,
      values: [
        "Manufacturer",
        "Companies",
        "Trader",
        "Distributor",
        "Reseller",
        "Wholesaler",
        "Service Provider",
      ],
      allowNull: false,
    },
    processLeadTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    processLeadTimeUnit: {
      type: DataTypes.ENUM,
      values: ["Day", "Week", "Month", "Quarter", "Year"],
      allowNull: false,
    },
    packageType: {
      type: DataTypes.ENUM,
      values: ["Bag", "Carton box", "bottle", "Customised"],
      allowNull: false,
    },
    packageQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    packageUnit: {
      type: DataTypes.ENUM,
      values: ["Pieces", "Kgs", "Litters"],
      allowNull: false,
    },
    deliveryTime: {
      // in days
      type: DataTypes.STRING,
      allowNull: false,
    },
    nearestPort: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brochure:{
      type:DataTypes.STRING,
      allowNull:true
    },
    isFeatured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status:{            // for approval of product
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  },
  {
    timestamps: true,
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId" });
Product.hasMany(ProductImage, { foreignKey: "productId" });
Product.hasMany(ProductSpecification, { foreignKey: "productId" });

module.exports = Product;
