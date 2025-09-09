const Sequelize = require('sequelize');

const sequelize = new Sequelize('todoist', 'root', 'vishal123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;