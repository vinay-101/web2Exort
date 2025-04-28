const { DataTypes } = require("sequelize");
const sequelize = require("../helper/db.config.js");

const Coupon = sequelize.define("coupons", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    }
}, {
    defaultScope: {
        where: {
            status: true
        }
    }
});

module.exports = Coupon;
