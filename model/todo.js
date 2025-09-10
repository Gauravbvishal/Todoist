    const Sequelize= require('sequelize');
    const sequelize = require('../DatabaseConnection/database');

    const Todo = sequelize.define('todo', {
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      priority: {
        type: Sequelize.ENUM("high", "medium", "low"),
        allowNull: false,
      },
    });

    module.exports =Todo;