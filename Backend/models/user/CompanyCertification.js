const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

// Post Requirement table
const CompanyCertification = sequelize.define(
    "companyCertifications",
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        certificateFile: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
    }
);

module.exports = CompanyCertification;
