const express = require('express');
const axios = require('axios');
const router = express.Router();
const mappedGiphyResponse = require('../mapping/giphy');


// Routes
// Get One Random Giph
//http://localhost:5000/api/giphy?searchTerm=doggos
router.get('/', async (req, res, next) => {
    if(req.query && req.query.searchTerm) {
        // To ensure randomization get 15 giphs at a time and then map a random one to the response
        const response = 
            await axios.get(
                `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.query.searchTerm}&limit=15`);
        
        if(response.status === 200 && response.data)
            res.send(mappedGiphyResponse(response.data));
        
    } else {
        res.status(400).send("requires number of giphs and search terms parms");
    }
    
    next();
});


module.exports = router;