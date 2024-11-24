'use strict';
const { Sequelize } = require('sequelize');

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable("users", {
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
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      loginOtp: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      accountActivatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      forgetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      userStatus: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["Active", "Banned"],
        defaultValue: "Active",
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      roles:{
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["admin", "superAdmin", 'user'],
        defaultValue: "user",
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
    return queryInterface.dropTable("users");
  },
};