const sequelize = require('sequelize');
const oracledb = require('oracledb');
const path = require('path');

oracledb.initOracleClient({ libDir: path.resolve(__dirname, 'C:\\D_drive\\Softwares\\instantclient-oracle\\instantclient_19_6') });

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
const sequelizePg = new sequelize.Sequelize('MULTIFIN', 'system', 'manager', {
    dialect: 'oracle',
    host: '10.73.84.148',
    database: 'posts',
    port: '1521', //optional
    connectionTimeout: 300000,
    fetchArraySize: 30,
  });

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
    sequelizePg: sequelizePg
}