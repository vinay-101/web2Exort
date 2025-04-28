const { DataTypes } = require("sequelize");
const sequelize = require("../../helper/db.config");

const PrivacyPolicy = sequelize.define("privacy_policies", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lang:{
        type: DataTypes.ENUM,
        values:['en', 'hi'],
        defaultValue:'en'
    }
});


module.exports = PrivacyPolicy;

