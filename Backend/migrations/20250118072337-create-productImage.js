"use strict";
const { Sequelize } = require("sequelize");

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable("productImages", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
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
    return queryInterface.dropTable("productImages");
  },
};
