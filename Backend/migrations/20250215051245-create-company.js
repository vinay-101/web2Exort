"use strict";
const { Sequelize, DataTypes} = require("sequelize");

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable("companies", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      companyDescription: {
        type: DataTypes.TEXT
      },
      companyLogo: {
        type: DataTypes.STRING
      },
      profileBanner: {
        type: DataTypes.STRING
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      streetAddress: {
        type: DataTypes.STRING,
        allowNull: true
      },
      primaryBusinessType: {        //  values:["Manufacturer", "Companies", "Trader", "Distributor","Reseller","Wholesaler","Service Provider"] (tag)
        type: DataTypes.STRING
      },
      businessCategories: {            // Should not allow more than 5 ( comes from categories list, store categoryId here) ( tag)
        type: DataTypes.STRING
      },
      workingDays: {                // monday - sunday  (tag)
        type: DataTypes.STRING
      },
      alternateMobileNumber: {
        type: DataTypes.STRING
      },
      alternateEmail: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      landlineNumber: {
        type: DataTypes.STRING
      },
      faxNumber: {
        type: DataTypes.STRING
      },

      // Company Info - Basic Information
      yearOfEstablishment: {                  // choose date by browser
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      ownershipType: {
        type: DataTypes.ENUM,
        values:[
          "Pvt Ltd",
          "LLC",
          "Sole Proprietorship",
          "Inc",
          "Others"
        ],
        allowNull: true
      },
      majorMarket: {
        type: DataTypes.STRING,  // (tag) // ["WorldWide","North America","Europe","Asia","South America", "Africa","Oceania (Australia)"]
        allowNull: true
      },
      termsOfDelivery: {      // ( tag)
        type: DataTypes.STRING, // ["DAP - Delivery at place", "DDP - Delivered Duty Paid", "FAS - Free Alongside Ship", "FOB - Free On Board", "CIF - Cost, Insurance, Freight"]
        allowNull: true
      },
      area: {
        type: DataTypes.ENUM,
        values:[
          "1000-3000 square meter",
          "3000-8000 square meter",
          "below - 1000 square meter",
          "above - 8000 square meter"
        ],
        allowNull:true
      },
      numberOfEmployees: {
        type: DataTypes.INTEGER
      },
      numberOfProductLines: {
        type: DataTypes.INTEGER
      },
      outputCapacity: {
        type: DataTypes.INTEGER
      },
      outputCapacityUnit: {
        type: DataTypes.ENUM,
        values:[
          "Bags",
          "Carton",
          "Dozen",
          "Feet",
          "Kilogram",
          "Meter",
          "Metric Ton",
          "Pieces",
          "Other"
        ],
        allowNull:true
      },
      averageLeadTime: {
        type: DataTypes.INTEGER
      },
      averageLeadTimeUnit: {
        type: DataTypes.ENUM,
        values: ["Day", "Week", "Month", "Quarter","Year"],
        allowNull:true
      },

      // Trade Information
      gstNumber: {
        type: DataTypes.STRING
      },
      panNumber: {
        type: DataTypes.STRING
      },
      tanNumber: {
        type: DataTypes.STRING
      },
      annualRevenue: {
        type: DataTypes.ENUM,
        values:[
          "USD $2.5 Million - USD $5 Million",
          "USD $5 Million - USD $10 Million",
          "above - USD $10 Million",
          "below - USD $2.5 Million"
        ],
        allowNull: true
      },
      exportPercentage: {
        type: DataTypes.FLOAT
      },
      nearestPort: {
        type: DataTypes.INTEGER,
        allowNull:true
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
    return queryInterface.dropTable("companies");
  },
};
