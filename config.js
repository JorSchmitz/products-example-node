// We will define here every enviromental variable

require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST,
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'root',
            port: 5432,
            database: 'products-db',
            define: {
                timestamps: true, // Will use created at and updated at
                underscored: true, // Turns camelCase into snake_case every name and attributes of the models
                underscoredAll: true,
            },
        },
        test: {},
        production: {},
    },
}

module.exports = configs
