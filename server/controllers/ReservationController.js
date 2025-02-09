const asyncHandler = require('express-async-handler');
const hqApi = require('../hq/hqApi'); 
const { query } = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

// Configure multer for in-memory file handling
const upload = multer({ storage: multer.memoryStorage() });

//@DESC Get Available Vehicles In Specific Locations and Date Time
//@Router GET /api/checkAvailabilityVehicles
//@access Private
const checkAvailabilityVehicles = asyncHandler(async (req, res) => {
    try {
        const { pick_up_date, pick_up_location_id, return_location_id, return_date } = req.query;

        // Construct the API call with query parameters
        const response = await hqApi.get('car-rental/ota/availability/', {
            params: {
                pick_up_date,
                return_date,
                pick_up_location_id,
                return_location_id,
            },
            headers: {
                Accept: 'application/vnd.api.v2+json',
            },
        });

        res.status(200).json(response.data.data);
    } catch (error) {
        console.error('Error fetching vehicle availability:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle availability',
        });
    }
});



//@DESC Get All Location
//@Router GET /api/getAllSecuirityDeposit
//@access Private
const getAllSecuirityDeposit = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('car-rental/security-deposits');
        res.status(200).json(response.data?.car_rental_security_deposit_rules);
    } catch (error) {
        console.error('Error fetching Secuirity Deposit :', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch location',
        });
    }
});

//@DESC Get Available Vehicles In Specific Locations and Date Time
//@Router POST /api/checkVehiclePrice
//@access Private
const checkVehiclePrice = asyncHandler(async (req, res) => {
    try {
        const {
            pick_up_date,
            pick_up_location,
            return_location,
            return_date,
            pick_up_time,
            return_time,
            brand_id,
            vehicle_class_id,
            additionalCharges
        } = req.query;


        // Construct the API call with query parameters
        const response = await hqApi.post(
            'car-rental/reservations/additional-charges',
            {
              // Request Body
              pick_up_date,
              return_date,
              pick_up_location,
              return_location,
              pick_up_time,
              return_time,
              brand_id,
              vehicle_class_id,
              additional_charges : additionalCharges,
            }
        );          

        res.status(200).json(response?.data);
    } catch (error) {
        console.error('Error fetching vehicle price:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle price',
        });
    }
});



//@DESC Get Available Vehicles In Specific Locations and Date Time
//@Router GET/api/getAdditonalCharges
//@access Private
const getAdditonalCharges = asyncHandler(async (req, res) => {
    try {
        const {
            pick_up_date,
            pick_up_location,
            return_location,
            return_date,
            pick_up_time,
            return_time,
            brand_id,
            vehicle_class_id,
        } = req.query;

        // Construct the API call with query parameters
        const response = await hqApi.get('car-rental/reservations/additional-charges', {
            params: {
                pick_up_date,
                return_date,
                pick_up_location,
                return_location,
                pick_up_time, // Add pick_up_time
                return_time,  // Add return_time
                brand_id,     // Add brand_id
                vehicle_class_id, // Add vehicle_class_id,
            }
        });      
        
        res.status(200).json(response?.data?.data?.additional_charges);
    } catch (error) {
        console.error('Error fetching getting Additional Charges:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to get additional charges',
        });
    }
});

// @DESC Upload a file to the external API
// @Route POST /api/uploadFile
// @Access Private
const uploadFile = asyncHandler(async (req, res) => {
    try {
        // Extract fields and file
        const { item_id, item_type, filename, field_id } = req.body;
        const file = req.file;

        // Validate input
        if (!item_id || !item_type || !filename || !field_id || !file) {
            return res.status(400).json({ message: 'All fields and file are required' });
        }

        // Create a FormData object
        const formData = new FormData();
        formData.append('item_id', item_id);
        formData.append('item_type', item_type);
        formData.append('filename', filename);
        formData.append('field_id', field_id);
        formData.append('file', file.buffer, file.originalname);

        // Send the data to the external API
        const response = await hqApi.post('files/upload', formData, {
            headers: {
                ...formData.getHeaders(), // Sets Content-Type with boundary
            },
        });

        // Return only the data field from the response
        res.status(200).json(response.data.data);
    } catch (error) {
        console.error('Error uploading file:', error.message || error);

        // Handle axios-specific errors
        if (error.response) {
            return res.status(error.response.status).json({
                message: error.response.data?.message || 'Failed to upload file',
            });
        }

        // Generic error response
        res.status(500).json({ message: 'An error occurred while uploading the file' });
    }
});

//@DESC Confirm Car Rental Reservation
//@Router POST /api/confirmReservation
//@access Private
const confirmReservation = asyncHandler(async (req, res) => {
    try {
        const {
            pick_up_date,
            return_date,
            pick_up_location,
            return_location,
            pick_up_time,
            return_time,
            brand_id,
            vehicle_class_id,
            additional_charges,
            customer_id
        } = req.query;

        // Construct API call with query parameters
        const response = await hqApi.post(
            'car-rental/reservations/confirm',
            {
                pick_up_date,
                return_date,
                pick_up_location,
                return_location,
                pick_up_time,
                return_time,
                brand_id,
                vehicle_class_id,
                additional_charges,
                customer_id,
                skip_confirmation_email: true
            }
        );

        console.log(response?.data?.data?.reservation?.id);

        if(response?.status == 200){
            const id = response?.data?.data?.reservation?.id
            const response2 = await hqApi.post(`/car-rental/reservations/${id}/pending`);
        }
        res.status(200).json(response?.data);
    } catch (error) {
        console.error('Error confirming reservation:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to confirm reservation',
        });
    }
});

//@DESC Process Payment Transaction
//@Router POST /api/processPayment
//@access Private
const processPayment = asyncHandler(async (req, res) => {
    try {
        const {
            amount,
            item_id,
            label,
            description,
            external_redirect
        } = req.query;

        // Construct the API call with query parameters
        const paymentUrl = `/payment-gateways/payment-transactions`;

        const response = await hqApi.post(paymentUrl, {
            amount,
            item_type : 'car_rental.reservations',
            item_id,
            payment_method_id : 1,
            label,
            description,
            external_redirect
        });

        res.status(200).json(response?.data);
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to process payment',
        });
    }
});



module.exports = { checkAvailabilityVehicles , checkVehiclePrice , getAllSecuirityDeposit , getAdditonalCharges , uploadFile: [upload.single('file'), uploadFile], confirmReservation , processPayment};
