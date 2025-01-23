const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

const SubCategory = sequelize.define(
  "subCategories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SubCategory;
