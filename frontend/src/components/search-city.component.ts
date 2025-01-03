import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.$emit('location-selected', this.selectedPlace);
  }
  //Click event to choose location
  mapClicked(event: any) {
    this.selectedPlace = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    this.$emit('location-selected', this.selectedPlace);
  }


}