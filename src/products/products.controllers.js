const Products = require('../models/products.models')
const Categories = require('../models/categories.models')

const findAllProducts = async () => {
    // return await productDB
    const data = await Products.findAll({
        attributes: ['id', 'title', 'price'], // Show this properties
        // exclude: ['createdAt', 'title'],      Hide this properties
        include: {
            model: Categories,
            attributes: ['id', 'name'],
        },
    })
    return data
}

const findProductById = async (id) => {
    // const data = await productDB.find((product) => product.id === id)
    // return data

    const data = await Products.findOne({
        where: {
            id: id,
        },
    })
    return data
}

// const findProductByIdWithPromises = (id) => {
//     return new Promise((resolve, reject) => {
//         const data = productDB.find((product) => product.id === id)
//         if (data) {
//             resolve(data)
//         } else {
//             reject('Invalid ID')
//         }
//     })
// }

const createNewProduct = async (prodObj) => {
    // const newProduct = {
    //     id: ++baseId,
    //     title: prodObj.title,
    //     price: prodObj.price,
    // }
    // await productDB.push(newProduct)
    // return newProduct

    const newProduct = {
        title: prodObj.title,
        price: prodObj.price,
    }
    const data = await Products.create(newProduct)
    return data
}

const updateProduct = async (id, prodObj) => {
    const data = await Products.update(prodObj, {
        where: {
            id: id,
        },
    })
    return data[0] // Will return [1]-(Amount of products changed) or [0]-(In case where did not find any coincidences)
} // we access position 0 to return the confirmation directly, as in this case it is an array

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id,
        },
    })
    return data // Will return [1]-(confirms the product was deleted) or [0]-(the id does not exist)
}

module.exports = {
    findAllProducts,
    findProductById,
    createNewProduct,
    updateProduct,
    deleteProduct,
}
