const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)
Item.belongsToMany(Menu, {through: 'Menu-item'})
Menu.belongsToMany(Item, {through: 'Menu-item'})


module.exports = { Restaurant, Menu, Item }
