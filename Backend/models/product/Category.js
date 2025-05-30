const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");
const SubCategory = require("./SubCategory");

const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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


Category.hasMany(SubCategory, { foreignKey: "categoryId" });
SubCategory.belongsTo(Category, { foreignKey: "categoryId" });


module.exports = Category;
