// Here we will import every model and here we will generate all of the
// relations between them

const { Model } = require('sequelize')
const Categories = require('./categories.models')
const Products = require('./products.models')

const initModels = () => {
    Products.belongsTo(Categories, {})
    Categories.hasMany(Products, {})
}

module.exports = initModels
