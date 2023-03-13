const Categories = require('../models/categories.models')

try {
    Categories.bulkCreate([
        {
            name: 'Technology',
        },
        {
            name: 'Clothes',
        },
        {
            name: 'Shoes',
        },
        {
            name: 'Toys',
        },
        {
            name: 'Pets',
        },
    ])
    console.log({ message: 'Categories created succesfully' })
} catch (err) {
    console.log({ message: 'Error in categories seeders', err })
}
