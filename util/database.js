const Sequelize = require('sequelize');

const sequelize = new Sequelize('sven', 'root', 'P455w0rD', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql'
})


module.exports = sequelize;
