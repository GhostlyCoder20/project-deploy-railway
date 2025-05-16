const express = require('express');
const config = require('./config/config')
const productRoutes = require('./routes/product')
const bodyParser = require('body-parser');




const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/productos', productRoutes);

app.set('port', config.app.express_port);

module.exports = app;