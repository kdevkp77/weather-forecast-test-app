<template>
  <div class="weather-forecast">
    <!-- Loading Dots -->
    <div v-if="loading" class="loading-container">
      <div class="dots">
        <span>.</span><span>.</span><span>.</span>
      </div>
      <p>Fetching the weather forecast</p>
    </div>

    <!-- Error Message -->
    <div v-if="!loading && error" class="error">
      {{ error }}
    </div>

    <!-- Weather Data -->
    <div v-else-if="!loading && weatherData" class="forecast-container">
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

    <!-- Placeholder -->
    <div v-else-if="!loading && !weatherData && !error" class="placeholder">
      Select a location to view the weather forecast.
    </div>
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

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 0;
}

.dots {
  display: inline-flex;
  font-size: 24px;
  color: #007acc;
  font-weight: bold;
  letter-spacing: 2px;
}

.dots span {
  animation: dots 1.5s infinite;
}

.dots span:nth-child(1) {
  animation-delay: 0s;
}

.dots span:nth-child(2) {
  animation-delay: 0.3s;
}

.dots span:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes dots {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

.loading-container p {
  font-size: 16px;
  color: #007acc;
  font-weight: bold;
  margin-top: 10px;
}

.forecast-container h2 {
  text-align: center;
  color: #333;
}

.location,
.current-weather {
  margin-top: 20px;
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.location h3,
.current-weather h3 {
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

