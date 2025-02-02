const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

// Post Requirement table
const Enquiry = sequelize.define(
  "enquires",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    requirement: {
      // Resons for enquiry
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userType: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ["Seller", "Buyer"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Enquiry;
