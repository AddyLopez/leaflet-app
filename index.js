// Initialization of map with a set latitude, longitude, and zoom level:
const map = L.map("leaflet-map").setView([50.4501, 30.5234], 4);

// OpenStreetMap tile layer:
const openStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

// Adds the OpenStreetMap tile layer to the map:
openStreetMap.addTo(map);

// OpenTopoMap tile layer:
const openTopoMap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }
);

// Adds the OpenTopoMap tile layer to the map:
openTopoMap.addTo(map);

// Stadia_AlidadeSmoothDark tile layer:
const stadia_AlidadeSmoothDark = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

// Adds the Stadia_AlidadeSmoothDark tile layer to the map:
stadia_AlidadeSmoothDark.addTo(map);

// Stadia_OSMBright tile layer:
const stadia_OSMBright = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

// Adds the Stadia_OSMBright tile layer to the map:
stadia_OSMBright.addTo(map);

// ESRI NatGeo World Map tile layer:
const esri_NatGeoWorldMap = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",
    maxZoom: 16,
  }
);

// Adds the NatGeo World Map tile layer to the map:
esri_NatGeoWorldMap.addTo(map);

// Assigns a customized icon with the local file path to the image and a size:
const customIcon = L.icon({
  iconUrl: "./images/thermometer-icon-marker.png",
  iconSize: [45, 45],
});

// Assigns the customized icon above to a marker at the coordinates specified:
const customMarker = L.marker([50.4501, 30.5234], {
  icon: customIcon,
});

// Generates a pop-up message that is bound to the customized marker and is instructed to open. The pop-up message also displays the latitude and longitude of the customized marker:
const customMarkerPopup = customMarker
  .bindPopup(
    "I am a pop-up on the customized marker! " + customMarker.getLatLng()
  )
  .openPopup();

// Adds the customized marker with its pop-up to the map:
customMarkerPopup.addTo(map);

// Assigns a default marker at the specified coordinates:
const defaultMarker = L.marker([50.4501, 33.5234]);

// Generates a pop-up message that is bound to the default marker and is instructed to open.
const defaultMarkerPopup = defaultMarker
  .bindPopup("I am a pop-up on the default marker!")
  .openPopup();

// Adds the defaultMarker with its pop-up to the map:
defaultMarkerPopup.addTo(map);

// Assigns all the tile layers to baseMaps as an object:
const baseMaps = {
  OpenStreetMap: openStreetMap,
  OpenTopoMap: openTopoMap,
  "Esri NatGeo World Map": esri_NatGeoWorldMap,
  "Stadia_AlidadeSmoothDark Map": stadia_AlidadeSmoothDark,
  "Stadia_OSMBright Map": stadia_OSMBright,
};

// Assigns all the markers to overlayMaps as an object:
const overlayMarkers = {
  "Customized Marker": customMarker,
  "Default Marker": defaultMarker,
};

// Adds the layers control for the tile layers and the markers to the map:
L.control.layers(baseMaps, overlayMarkers).addTo(map);

// Uses the Leaflet Event called "mouseover" to log the presence of the cursor on the map:
map.on("mouseover", function () {
  console.log("The mouse is on the map.");
});

// Uses the Leaflet Event called "mousemove" to display the coordinates of the cursor wherever it is hovered over the map:
map.on("mousemove", function (event) {
  document.getElementById("coordinates").innerHTML =
    "<strong>latitude:</strong> " +
    event.latlng.lat +
    " <strong>longitude:</strong> " +
    event.latlng.lng;
});

// Logs the GeoJSON object in the console:
console.log(customMarker.toGeoJSON());

// A Leaflet Geocoder plug-in that adds a search engine to the map:
L.Control.geocoder().addTo(map);
