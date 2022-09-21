//const util = require("util");
//var mysql = require("mysql");
const config = require('../env.js');


const { Sequelize } = require('sequelize');
const database = config.db;
const username = config.user_db;
const password = config.pass;
const host = config.host_db;


const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection succesfull');
} catch (error) {
  console.error('Error connection:', error);
}

module.exports = sequelize;
/*var connect = mysql.createPool({
  connectionLimit: 10,
  host: config.host_db,
  user: config.user_db,
  password: config.pass,
  database: config.db,
  multipleStatements: true,
});

connect.on("relase", () => {
  console.log("connection %d relase", connection.threadId);
});

connect.query = util.promisify(connect.query);

module.exports = connect;*/


