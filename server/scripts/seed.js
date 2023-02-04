const servicesEditing = require('./seed/services');
const paramsEditing = require('./seed/params');
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
})
require('../models/db');



const startEditing = async () => {
    servicesEditing();
    paramsEditing();
}

startEditing();