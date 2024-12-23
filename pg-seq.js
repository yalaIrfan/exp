const sequelize = require('sequelize');
const dbConfig = {
    user: 'postgres',
    password: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    host: 'localhost',
    port: 5432,
    database: 'posts'
};
const sequelizePg = new sequelize.Sequelize('posts', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    dialect: 'postgres'
});
/* one of 'mysql' | '' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

async function dbSetup() {
    try {
        await sequelizePg.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

dbSetup().then(() => {
    console.log('Database setup completed');
});

module.exports = {
    ...sequelize,
    sequelizePg
}