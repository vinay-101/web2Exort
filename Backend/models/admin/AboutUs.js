const { DataTypes } = require("sequelize");
const sequelize = require("../../helper/db.config");

const AboutUs = sequelize.define("about_us", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});


module.exports = AboutUs;

