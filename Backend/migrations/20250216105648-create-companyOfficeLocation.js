"use strict";
const { Sequelize } = require("sequelize");

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable("companyOfficeLocations", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      companyId: {
        type: DataTypes.INTEGER,
        references: {
          model: "companies",
          key: "id",
        },
      },
      locationType: {
        type: DataTypes.ENUM("Head", "Branch"),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      streetAddress: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    return queryInterface.dropTable("companyOfficeLocations");
  },
};
