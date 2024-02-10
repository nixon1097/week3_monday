const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student= sequelize.define('student', {
    fristName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    //degreeId
    
    //countryId
});

module.exports = Student;