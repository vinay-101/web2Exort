const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

// Post Requirement table
const companyRegistration = sequelize.define(
    "companyRegistrations",
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
        registrationLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        registrationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        registrationNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faxNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = companyRegistration;
