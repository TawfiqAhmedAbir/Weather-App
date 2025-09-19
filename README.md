# Weather App

A clean full-stack weather application built with Vite (vanilla JS) + Tailwind CSS frontend and Node.js + Express backend.

## Features

- Submit a city name to get current weather information
- Displays city name, temperature (°C), weather description, and weather icon
- Uses OpenWeatherMap API for weather data

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation

1. Clone the repository and navigate to the project directory
2. Install root dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client && npm install
   ```

4. Install server dependencies:
   ```bash
   cd ../server && npm install
   ```

5. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your OpenWeatherMap API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

### Running the Application

#### Option 1: Run both client and server together
```bash
npm run dev
```

#### Option 2: Run separately
```bash
# Terminal 1 - Start the server
cd server && npm run dev

# Terminal 2 - Start the client
cd client && npm run dev
```

The client will be available at `http://localhost:5173` and the server at `http://localhost:3000`.

## API Endpoints

- `GET /api/weather?city={cityName}` - Get weather data for a specific city

## Tech Stack

- **Frontend**: Vite, Vanilla JavaScript, Tailwind CSS (CDN)
- **Backend**: Node.js, Express
- **API**: OpenWeatherMap API
