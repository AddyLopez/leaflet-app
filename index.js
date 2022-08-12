// Initialization of OpenStreetMap
const map = L.map("leaflet-map").setView([50.4501, 30.5234], 4);

// OpenStreetMap tile layer
const openStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

openStreetMap.addTo(map);

// OpenTopoMap tile layer

const openTopoMap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }
);
openTopoMap.addTo(map);

// Stalia_AlidadeSmoothDark tile layer

const stadia_AlidadeSmoothDark = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

stadia_AlidadeSmoothDark.addTo(map);

// Stadia_OSMBright tile layer

const stadia_OSMBright = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

stadia_OSMBright.addTo(map);

// Custom Icon for Marker:
const customIcon = L.icon({
  iconUrl: "./images/thermometer-icon-marker.png",
  iconSize: [45, 45],
});

// ESRI NatGeo World Map tile layer:
const esri_NatGeoWorldMap = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",
    maxZoom: 16,
  }
);

esri_NatGeoWorldMap.addTo(map);

// Leaflet Marker:
const customMarker = L.marker([50.4501, 30.5234], {
  icon: customIcon,
});
const customMarkerPopup = customMarker
  .bindPopup("I am a popup on the custom icon! " + customMarker.getLatLng())
  .openPopup();
customMarkerPopup.addTo(map);

// second marker:
const defaultMarker = L.marker([50.4501, 33.5234]);
const defaultMarkerPopup = defaultMarker
  .bindPopup("I am the default marker's popup!")
  .openPopup();
defaultMarkerPopup.addTo(map);

// Logs GeoJSON object in the console:
console.log(customMarker.toGeoJSON());

// Tile layer controller
const baseMaps = {
  OpenStreetMap: openStreetMap,
  "Esri NatGeo World Map": esri_NatGeoWorldMap,
  OpenTopoMap: openTopoMap,
  "Stadia_AlidadeSmoothDark Map": stadia_AlidadeSmoothDark,
  "Stadia_OSMBright Map": stadia_OSMBright,
};

const overlayMaps = {
  "Custom Marker": customMarker,
  "Default Marker": defaultMarker,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// Leaflet Events:
// mouseover:
map.on("mouseover", function () {
  console.log("The mouse is on the map.");
});
// mousemove (Displays the coordinates of the mouse wherever it is over the map.)

map.on("mousemove", function (event) {
  document.getElementById("coordinates").innerHTML =
    "<strong>lat:</strong> " +
    event.latlng.lat +
    " <strong>lng:</strong> " +
    event.latlng.lng;
});

// Leaflet Geocoder plug-in that adds a search engine to the map

L.Control.geocoder().addTo(map);
