const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const addUsersRoutes = require('./routes/add-users');
const dashboard = require('./routes/dashboard');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addUsersRoutes);
app.use(dashboard);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);