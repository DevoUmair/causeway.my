const asyncHandler = require('express-async-handler');
const hqApi = require('../hq/hqApi'); 

//@DESC Create Customer
//@Router POST /api/createCustomer
//@access Private
const createCustomer = asyncHandler(async (req, res) => {
    try {
        // Capture all query parameters
        const queryParams = req.query;

        // Validate if query parameters exist
        if (Object.keys(queryParams).length === 0) {
            return res.status(400).json({ message: "No query parameters provided" });
        }

        const response = await hqApi.post(
            `contacts/categories/3/contacts`,
            new URLSearchParams(queryParams), 
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || "Failed to create customer",
        });
    }
});

const getSingleCustomer = asyncHandler(async (req, res) => {
    try {
        const { license, birthday } = req.query;

        const response = await hqApi.get('contacts/categories/3/contacts?limit=1000000');

        const filteredCustomers = response.data.data.filter(customer => {
            return (
                (!license || customer.driver_license === license) &&
                (!birthday || customer.birthdate == birthday)
            );
        });

        if (filteredCustomers.length === 0) {
            return res.status(404).json({ message: "No customer found matching the criteria." });
        }

        res.status(200).json(filteredCustomers);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch Single Customer',
        });
    }
});



module.exports = { createCustomer , getSingleCustomer };
