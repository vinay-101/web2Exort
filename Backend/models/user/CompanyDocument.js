const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

// Post Requirement table
const companyDocument = sequelize.define(
    "companyDocuments",
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
        documentType: {
            type: DataTypes.ENUM('Registration', 'Tax', 'Utility', 'Identification', 'Business'),
            allowNull: false
        },
        documentFile: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true,
    }
);

module.exports = companyDocument;
