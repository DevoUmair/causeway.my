require('dotenv').config(); 

const express = require('express');

const cors = require('cors')

const vehicaleRoute = require('./routers/VehicaleRoute'); 
const reserationRoute = require('./routers/ReservationRoute'); 
const customerRoute = require('./routers/CustomerRoute'); 

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://causewaymy.web.app', 'https://causeway.my' , 'https://www.causeway.my' , 'https://causewaymy.firebaseapp.com' ];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        console.log('Incoming request from origin:', origin);
        
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            console.log('Blocked by CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


// Routers
app.get('/', (req, res) => {
    res.send('Hello, Causeway API is working!');
});
app.get("/api/version", (req, res) => {
    res.json(require("./version.json"));
});
app.use('/api/vehicale', vehicaleRoute);
app.use('/api/reservation', reserationRoute);
app.use('/api/customer', customerRoute);

const port = process.env.PORT || 5000

app.listen(port, () => {
    const token = process.env.ENCODE_TOKEN;
    console.log(token);
    console.log('Server listen' , port);
});
