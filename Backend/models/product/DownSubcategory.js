const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

const DownSubCategory = sequelize.define(
  "downSubCategories",
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
    subCategoryId: { // belongs to subcategory
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

module.exports = DownSubCategory;
