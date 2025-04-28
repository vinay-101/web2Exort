'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coupons', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      discountType: {
        type: DataTypes.ENUM,
        values: ['percentage', 'fixed'],
        allowNull: false
      },
      discountValue: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      usageLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      usedCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      perCustomerLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coupons')
  }
};
