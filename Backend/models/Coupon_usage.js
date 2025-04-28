const { DataTypes } = require("sequelize");
const sequelize = require("../../helper/db.config");
const Coupon = require("./Coupon");

const UserCoupon = sequelize.define("user_coupons", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    couponId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    final_discounted_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    couponAmt: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },


});
UserCoupon.belongsTo(Coupon,{foreignKey:'couponId'})
module.exports = UserCoupon;
