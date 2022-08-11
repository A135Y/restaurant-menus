const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Restaurant = db.define('restaurant', {
    name:  { 
        type: DataTypes.STRING 
    },

    location: {
        type: DataTypes.STRING
        },
    
    cuisine: {
        type: DataTypes.STRING
        }
    
})

async function main(){
    await Restaurant.sync({force:true})

    // await Restaurant.create({
    //     name: 'Rayaan',
    //     location: 'Bruce Grove',
    //     cuisine: 'Somali'
    // }),

    // await Restaurant.create({
    //     name: 'Slim Chickens',
    //     location: 'Russell Square',
    //     cuisine: 'American'
    // }),

    // await Restaurant.create({
    //     name: 'Roti King',
    //     location: 'Euston',
    //     cuisine: 'Indonesian'
    // })

    // await Restaurant.create({
    //     name: 'Busaba',
    //     location: 'Soho',
    //     cuisine: 'Thai'
    // })
}

main()


module.exports = {Restaurant};