import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Watch } from 'vue-property-decorator';

@Options({
  props: {
    selectedPlace: Object,
  },
  methods: {
    formatDate(date: Date): string {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return new Date(date).toLocaleString(undefined, options);
    },
    getWeatherDescription(code: number): string {
      const weatherCodes: Record<number, string> = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        10: "Light rain",
        // Add more weather codes here based on your API documentation
      };
      return weatherCodes[code] || "Unknown weather condition";
    },
  }
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;
  
  @Prop({ default: null })
  public selectedPlace!: { lat: number; lng: number } | null;
  
  weatherData: any = null;
  error: string | null = null;

  @Watch('selectedPlace', { immediate: true, deep: true })
  async onSelectedPlaceChange(newVal: { lat: number; lng: number } | null) {
    if (newVal) {
      try {
        this.error = null;
        this.weatherData = await this.weatherService.getWeatherForecast(
          newVal.lat,
          newVal.lng
        );
      } catch (err) {
        this.weatherData = null;
        this.error = 'Failed to fetch weather forecast. Please try again.';
      }
    }
  }

}


