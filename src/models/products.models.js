const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
        unique: true,
    },
    price: {
        type: DataTypes.DECIMAL, // COULD BE FLOAT
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id',
        },
    },
})

// Products.create({
//     id: 1,
//     title: 'Hola'
// })

module.exports = Products
