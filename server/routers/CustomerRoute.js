const express = require('express');
const { createCustomer , getSingleCustomer } = require('../controllers/CustomerController');

const router = express.Router();

router.post('/createCustomer', createCustomer); // Ensure the route matches your desired endpoint
router.get('/getSingleCustomer', getSingleCustomer); // Ensure the route matches your desired endpoint


module.exports = router;
