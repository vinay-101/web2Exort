const { DataTypes } = require("sequelize");
const sequelize = require("../../helper/db.config");

// Define UserSubscription model
const UserSubscription = sequelize.define(
  "userSubscriptions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    subscriptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "expired", "cancelled"),
      defaultValue: "active",
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "userSubscriptions",
  }
);

module.exports = UserSubscription;
