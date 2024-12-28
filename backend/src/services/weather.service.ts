import axios from 'axios';
export interface ForecastModel {
    latitude: number,
    longitude: number,
    elevation: number,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    }
}


export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
        // Call the weather API
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
        const response = await axios.get(apiUrl);
        return {
            latitude: response.data.latitude,
            longitude: response.data.longitude,
            elevation: response.data.elevation,
            current_weather: response.data.current_weather
        };
}
