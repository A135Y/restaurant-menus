const {db} = require('../db');
const { Sequelize , DataTypes} = require('sequelize');

const Menu = db.define('menu', {
    title:  { 
        type: DataTypes.STRING 
    },

})


async function main(){
    await Menu.sync({force:true})

    // await Menu.create({
    //     title: 'Main Menu'
    // })

    // await Menu.create({
    //     title: 'Sides'
    // })

    // await Menu.create({
    //     title: 'Drinks'
    // })

    // await Menu.create({
    //     title: 'Desserts'
    // })
}

main()

module.exports = {Menu};

