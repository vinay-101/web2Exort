const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

// Post Requirement table
const CompanyOfficeLocation = sequelize.define(
    "companyOfficeLocations",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        companyId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'companies',
                key: 'id'
            }
        },
        locationType: {
            type: DataTypes.ENUM('Head', 'Branch'),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        streetAddress: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: true,
    }
);

module.exports = CompanyOfficeLocation;
