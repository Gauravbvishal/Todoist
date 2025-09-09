const express = require('express');
const app = express();
const loginroutes = require('./routes/login')
const taskroutes = require('./routes/todo')
const sequelize = require('./DatabaseConnection/database');
const Todo= require('./model/todo');
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(loginroutes);
app.use(taskroutes);

sequelize.sync() 
    .then(() => {
        console.log('Database synced successfully!');
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    })
    .catch(err => {
        console.error('Unable to sync database:', err);
    });

