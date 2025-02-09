const asyncHandler = require('express-async-handler');
const hqApi = require('../hq/hqApi'); 



//@DESC Get All Vehicale Types
//@Router GET /api/getAllVehicaleTypes
//@access Private
const getAllVehicales = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('fleets/vehicles/');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle',
        });
    }
});

//@DESC Get All Vehicale Types
//@Router GET /api/getAllVehicaleTypes
//@access Private
const getAllVehicaleTypes = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('fleets/vehicle-types');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching vehicle types:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle types',
        });
    }
});

//@DESC Get All Vehicale Class
//@Router GET /api/getAllVehicaleClasses
//@access Private
const getAllVehicalesClasses = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('fleets/vehicle-classes');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching vehicle class:', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle class',
        });
    }
});

//@DESC Get All Vehicle Features
//@Router GET /api/getAllVehicaleFeatures
//@access Private
const getAllVehicaleFeatures = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('fleets/features');
        res.status(200).json(response.data?.fleets_features);
    } catch (error) {
        console.error('Error fetching vehicle features :', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch vehicle features',
        });
    }
});

//@DESC Get All Location
//@Router GET /api/getAllLocation
//@access Private
const getAllLocation = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('fleets/locations');
        res.status(200).json(response.data.fleets_locations);
    } catch (error) {
        console.error('Error fetching  location :', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch location',
        });
    }
});

//@DESC Get All Location
//@Router GET /api/getAllAdditionalFeatures
//@access Private
const getAllAdditionalFeatures = asyncHandler(async (req, res) => {
    try {
        const response = await hqApi.get('fleets/additional-charges');
        res.status(200).json(response.data.fleets_additional_charges);
    } catch (error) {
        console.error('Error fetching  additional features :', error);
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || 'Failed to fetch location',
        });
    }
});

module.exports = { getAllVehicaleTypes , getAllVehicales , getAllVehicalesClasses , getAllVehicaleFeatures , getAllLocation , getAllAdditionalFeatures };
