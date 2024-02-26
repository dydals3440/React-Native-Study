class Place {
  constructor(title, imageUrl, address, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = address;
    this.location = location; // { lat: 0.14241, lng: 127.123}
    this.id = new Date().toString() + Math.random().toString();
  }
}
