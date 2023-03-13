const Products = require('../models/products.models')

try {
    Products.bulkCreate([
        {
            title: 'iPhone',
            price: 1200,
            categoryId: 1,
        },
        {
            title: 'X-men Tee',
            price: 20,
            categoryId: 2,
        },
        {
            title: 'Power Ranger toy',
            price: 50,
            categoryId: 4,
        },
    ])
    console.log({ message: 'Products created succesfully' })
} catch (error) {
    console.log({ message: 'Error in products seeders', error })
}
