// Initialization of OpenStreetMap
const map = L.map("leaflet-map").setView([35.08449, -106.65114], 13);
const openStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

openStreetMap.addTo(map);
