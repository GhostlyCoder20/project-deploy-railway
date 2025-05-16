

const express = require('express');
const router = express.Router();
const controller = require('../controller/product');
const response = require('../helpers/responses');


router.get('/', async (req, res) => {
    
    const data = await controller.getProducts();
    response.success(req, res, data);
 
 });



 module.exports = router;