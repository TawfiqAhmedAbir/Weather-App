document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('weatherForm');
    const cityInput = document.getElementById('cityInput');
    const loading = document.getElementById('loading');
    const weatherResult = document.getElementById('weatherResult');
    const errorMessage = document.getElementById('errorMessage');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherIcon = document.getElementById('weatherIcon');
    const errorText = document.getElementById('errorText');

    // Fetch weather from our backend API
    async function fetchWeather(q) {
        const res = await fetch(`/api/weather?q=${encodeURIComponent(q)}`);
        if (!res.ok) {
            const msg = await res.text();
            throw new Error(`API ${res.status}: ${msg}`);
        }
        return res.json();
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const city = cityInput.value.trim();
        if (!city) return;

        // Show loading state
        showLoading();
        hideError();
        hideWeather();

        try {
            const data = await fetchWeather(city);

            if (data.error) {
                showError(data.error);
            } else {
                showWeather(data);
            }
        } catch (error) {
            console.error('Error fetching weather:', error);
            showError('Failed to fetch weather data. Please try again.');
        }
    });

    function showLoading() {
        loading.classList.remove('hidden');
        weatherResult.classList.add('hidden');
        errorMessage.classList.add('hidden');
    }

    function hideLoading() {
        loading.classList.add('hidden');
    }

    function showWeather(data) {
        hideLoading();
        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
        weatherResult.classList.remove('hidden');
    }

    function hideWeather() {
        weatherResult.classList.add('hidden');
    }

    function showError(message) {
        hideLoading();
        errorText.textContent = message;
        errorMessage.classList.remove('hidden');
    }

    function hideError() {
        errorMessage.classList.add('hidden');
    }
});