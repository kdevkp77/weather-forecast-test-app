import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';

@Options({
  components: {
    SearchCity,
    WeatherForecast,
  },
})
export default class HomeView extends Vue {
  selectedPlace: { lat: number; lng: number } | null = null;

  handleLocationSelected(location: { lat: number; lng: number }) {
    this.selectedPlace = location;
  }
}