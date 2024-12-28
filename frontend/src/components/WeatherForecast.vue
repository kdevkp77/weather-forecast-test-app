<template>
  <div class="weather-forecast">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="weatherData" class="forecast-container">
      <h2>Weather Forecast</h2>
      
      <div class="location">
        <h3>Location</h3>
        <p>Latitude: {{ weatherData.latitude }}</p>
        <p>Longitude: {{ weatherData.longitude }}</p>
        <p>Elevation: {{ weatherData.elevation }} meters</p>
      </div>
      
      <div class="current-weather">
        <h3>Current Weather</h3>
        <p><strong>Temperature:</strong> {{ weatherData.current_weather.temperature }}°C</p>
        <p><strong>Wind Speed:</strong> {{ weatherData.current_weather.windspeed }} km/h</p>
        <p><strong>Wind Direction:</strong> {{ weatherData.current_weather.winddirection }}°</p>
        <p><strong>Weather Code:</strong> {{ getWeatherDescription(weatherData.current_weather.weathercode) }}</p>
        <p><strong>Time:</strong> {{ formatDate(weatherData.current_weather.time) }}</p>
      </div>
    </div>
    <div v-else class="placeholder">Select a location to view the weather forecast.</div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style scoped>
.weather-forecast {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.forecast-container h2 {
  text-align: center;
  color: #333;
}

.location, .current-weather {
  margin-top: 20px;
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.location h3, .current-weather h3 {
  color: #007acc;
}

p {
  margin: 5px 0;
  color: #555;
}

.placeholder {
  text-align: center;
  margin-top: 20px;
  color: #888;
  font-size: 16px;
}

.error {
  text-align: center;
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style>

