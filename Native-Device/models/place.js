export class Place {
  constructor(title, imageUrl, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = location?.address;
    this.location = { lat: location?.lat, lng: location?.lng }; // { lat: 0.14241, lng: 127.123}
    this.id = new Date().toString() + Math.random().toString();
  }
}
