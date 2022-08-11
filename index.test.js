const {db} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({force: true});
    });

    test('can create a Restaurant', async () => {
        const testRestaurant = await Restaurant.create(seedRestaurant[0])
        expect(testRestaurant.name).toEqual(seedRestaurant[0].name)
    });

    test('can create a Menu', async () => {
        const testMenu = await Menu.create(seedMenu[0])
        expect(testMenu.title).toEqual(seedMenu[0].title)
    });

    test('can find Restaurants', async () => {
        const testFindRestaurant = await Restaurant.findAll()
        expect(testFindRestaurant.length).toEqual(1)
        expect(testFindRestaurant[0].name).toEqual(seedRestaurant[0].name)
    });

    test('can find Menus', async () => {
        const testFindMenu = await Menu.findAll()
        expect(testFindMenu.length).toEqual(1)
        expect(testFindMenu[0].title).toEqual(seedMenu[0].title)
    });


//use destory method to return null
    test('can delete Restaurants', async () => {
        const testFindDeletedRestaurant = await Restaurant.findAll()
        const deletedRestaurant = await testFindDeletedRestaurant[0].destroy()
        expect(deletedRestaurant.name).toEqual(testFindDeletedRestaurant[0].name)
    });

    test('Restaurant can have many menus', async () => {
        await db.sync({force:true});

        const newRestaurant = await Restaurant.create({
            name: "PF Chang's",
            location: 'Leicster Square',
            cuisine: 'Aisian-American'
        })
    
        const mainMenu = await Menu.create({
            title: 'Main Menu'
        })

        const sidesMenu = await Menu.create({
            title: 'Sides'
        })

        const drinksMenu = await Menu.create({
            title: 'Drinks'
        })

        const dessertsMenu = await Menu.create({
            title: 'Drinks'
        })

        await newRestaurant.addMenu(mainMenu)
        await newRestaurant.addMenu(sidesMenu)
        await newRestaurant.addMenu(drinksMenu)
        await newRestaurant.addMenu(dessertsMenu)
  
        const menus = await newRestaurant.getMenus()
        expect(menus[0].title).toEqual(mainMenu.title)
        expect(menus[1].title).toEqual(sidesMenu.title)
        expect(menus[2].title).toEqual(drinksMenu.title)
        expect(menus[3].title).toEqual(dessertsMenu.title)
    });


    test('Menus can have multiple items', async() => {
        
        const mainMenu = await Menu.create({
            title: 'Main Menu'
        })

        const mainItem1 = await Item.create({
            name:  'Sesame Chicken',
            image: 'https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg',
            vegetarian: false,
            price:  11.25
        })

        const mainItem2 = await Item.create({
            name:  'Crispy Prawns',
            image: 'https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://www.gohealthyeverafter.com/wp-content/uploads/2020/01/fried-shrimps-2.jpg',
            vegetarian: false,
            price:  13.75
        })

        await mainMenu.addItem(mainItem1)
        await mainMenu.addItem(mainItem2)
        const getItem = await mainMenu.getItems()
        expect(getItem[0].name).toEqual(mainItem1.name)
        expect(getItem[1].name).toEqual(mainItem2.name)
    })
})

