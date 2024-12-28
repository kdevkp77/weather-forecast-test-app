<template>
  <div class="home">
    <!-- Pass the event handler to SearchCity -->
    <SearchCity @location-selected="handleLocationSelected" />

    <!-- Pass the selectedPlace as a prop to WeatherForecast -->
    <WeatherForecast :selectedPlace="selectedPlace" />
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
