"use strict";
const { Sequelize } = require("sequelize");

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable("subCategories", {
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
    return queryInterface.dropTable("subCategories");
  },
};
