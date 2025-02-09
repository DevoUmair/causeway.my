const express = require('express')

const { getAllVehicaleTypes , getAllVehicales , getAllVehicalesClasses , getAllVehicaleFeatures , getAllLocation  , getAllAdditionalFeatures} = require('../controllers/VehcialeController')

const router = express.Router()

router.get('/getAllVehicaleTypes' , getAllVehicaleTypes)
router.get('/getAllVehicales' , getAllVehicales)
router.get('/getAllVehicalesClasses' , getAllVehicalesClasses)
router.get('/getAllVehicaleFeatures' , getAllVehicaleFeatures)
router.get('/getAllLocation' , getAllLocation)
router.get('/getAllAdditionalFeatures' , getAllAdditionalFeatures)

module.exports = router