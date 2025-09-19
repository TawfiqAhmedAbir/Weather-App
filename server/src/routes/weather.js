const express = require('express');
const axios = require('axios');
const router = express.Router();

// Weather route
router.get('/weather', async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }

        const apiKey = process.env.OPENWEATHER_API_KEY;
        
        if (!apiKey) {
            console.error('OPENWEATHER_API_KEY is not set in environment variables');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // OpenWeatherMap API call
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric'
            },
            timeout: 10000 // 10 second timeout
        });

        const weatherData = response.data;

        // Extract required data
        const result = {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon
        };

        res.json(result);

    } catch (error) {
        console.error('Weather API error:', error.message);

        if (error.response) {
            // API returned an error response
            const status = error.response.status;
            
            if (status === 404) {
                res.status(404).json({ error: 'City not found' });
            } else if (status === 401) {
                res.status(500).json({ error: 'Invalid API key' });
            } else {
                res.status(500).json({ error: 'Weather service unavailable' });
            }
        } else if (error.code === 'ECONNABORTED') {
            // Timeout error
            res.status(500).json({ error: 'Request timeout' });
        } else {
            // Network or other errors
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }
});

module.exports = router;
