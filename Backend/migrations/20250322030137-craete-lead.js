"use strict";
const { Sequelize, BOOLEAN } = require("sequelize");

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable("leads", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        // add admin id
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      leadId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      companyName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      contactPerson: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // validate: {
        //   isEmail: true,
        // },
      },
      mobileNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      mobileNumber2: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      shippingTerm: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      paymentTerm: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      destinationPort: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      country: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      subcategory: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      microCategory: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      leadType: {
        type: DataTypes.ENUM("Seller", "Buyer"),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },

  down: function (queryInterface, DataTypes) {
    return queryInterface.dropTable("leads");
  },
};
