const {db} = require('../db');
const { Sequelize , DataTypes} = require('sequelize');

const Item = db.define('item', {
    name:  { 
        type: DataTypes.STRING 
    },

    image:  { 
        type: DataTypes.STRING
    },

    vegetarian:  { 
        type: DataTypes.BOOLEAN
    },

    price:  { 
        type: DataTypes.REAL
    },

})


module.exports = {Item}