const configMongoDB = {
    user: process.env.USER_DB_MONGO_DB,
    password: process.env.PASSWORD_DB_MONGO_DB,
    database: process.env.NAME_DB_MONGO_DB
}

module.exports = {configDB, configMongoDB}