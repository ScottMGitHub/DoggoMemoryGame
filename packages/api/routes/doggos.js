const express = require('express');
const axios = require('axios');
const router = express.Router();
const mappedDoggoResponse = require('../mapping/doggos');

// Routes
// Get specific number of doggos
//http://localhost:5000/api/doggos?numberOfDoggos=10
router.get('/', async (req, res, next) => {

    if(req.query && req.query.numberOfDoggos) {
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${req.query.numberOfDoggos}`);
        if(response.status === 200 && response.data.message) {
            res.send(mappedDoggoResponse(response.data.message));
        }
    } else {
        // Default to 10
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
        if(response.status === 200 && response.data.message) {
            res.send(mappedDoggoResponse(response.data.message));
        }
    }
    
    next();
});


module.exports = router;