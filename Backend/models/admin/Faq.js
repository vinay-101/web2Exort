const { DataTypes } = require("sequelize");
const sequelize = require("../../helper/db.config");

const Faq = sequelize.define("faqs", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    heading:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: true
    },
});


module.exports = Faq;

