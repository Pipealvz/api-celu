//const util = require("util");
//var mysql = require("mysql");


const { Sequelize } = require('sequelize');
const database = process.env['DATABASE'];
const username = process.env['USER'];
const password = process.env['PASSWORD'];
const host = process.env['HOST'];


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


