const express = require('express')

const {checkAvailabilityVehicles , checkVehiclePrice , getAllSecuirityDeposit , getAdditonalCharges , uploadFile , confirmReservation , processPayment} = require('../controllers/ReservationController')

const router = express.Router()

router.get('/checkAvailabilityVehicles' , checkAvailabilityVehicles)
router.post('/checkVehiclePrice' , checkVehiclePrice)
router.get('/getAllSecuirityDeposit' , getAllSecuirityDeposit)
router.post('/getAdditonalCharges' , getAdditonalCharges)
router.post('/upload' , uploadFile)
router.post('/confirmReservation' , confirmReservation)
router.post('/processPayment' , processPayment)


module.exports = router