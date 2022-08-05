// Initialization of OpenStreetMap
const map = L.map("leaflet-map").setView([50.4501, 30.5234], 13);
const openStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

openStreetMap.addTo(map);
