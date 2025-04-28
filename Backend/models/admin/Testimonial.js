const { DataTypes } = require("sequelize");
const sequelize = require("../../helper/db.config");

const TestimonialCms = sequelize.define("testimonial_cms", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    image:{                     // also could be video
        type: DataTypes.STRING,
        allowNull: true
    },
    title:{
        type: DataTypes.TEXT,
        allowNull:true
    },
    desc:{
        type: DataTypes.TEXT,
        allowNull:true
    },    
});


module.exports = TestimonialCms;

