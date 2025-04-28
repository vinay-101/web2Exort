const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");
const DownSubCategory = require("./DownSubcategory");

const SubCategory = sequelize.define(
  "subCategories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    categoryId: { // belongs to category
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// SubCategory.belongsTo(DownSubCategory, {foreignKey: 'categoryId'});
SubCategory.hasMany(DownSubCategory, {foreignKey: 'subCategoryId'});
// DownSubCategory.belongsTo(SubCategory, {foreignKey: 'subCategoryId'});

module.exports = SubCategory;
