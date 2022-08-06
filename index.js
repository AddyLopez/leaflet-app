// Initialization of OpenStreetMap
const map = L.map("leaflet-map").setView([50.4501, 30.5234], 4);

// Open Street Map tile layer
const openStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

openStreetMap.addTo(map);

// NASAGIBS_ViirsEarthAtNight2012 tile layer:
const NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer(
  "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}",
  {
    attribution:
      'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    bounds: [
      [-85.0511287776, -179.999999975],
      [85.0511287776, 179.999999975],
    ],
    minZoom: 1,
    maxZoom: 8,
    format: "jpg",
    time: "",
    tilematrixset: "GoogleMapsCompatible_Level",
  }
);

NASAGIBS_ViirsEarthAtNight2012.addTo(map);

// Google Street tile layer:
const googleStreet = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleStreet.addTo(map);

// Google Satellite tile layer:
const googleSatellite = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleSatellite.addTo(map);

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
const firstMarker = L.marker([50.4501, 30.5234], {
  icon: customIcon,
});
const firstMarkerPopup = firstMarker
  .bindPopup("I am a popup!" + firstMarker.getLatLng())
  .openPopup();
firstMarkerPopup.addTo(map);

// Logs GeoJSON object in the console:
console.log(firstMarker.toGeoJSON());

// Tile layer controler
const baseMaps = {
  "Open Street Map": openStreetMap,
  "NASAGIBS Earth at Night 2012": NASAGIBS_ViirsEarthAtNight2012,
  "Google Street Map": googleStreet,
  "Google Satellite Map": googleSatellite,
  "Esri NatGeo World Map": esri_NatGeoWorldMap,
};

const overlayMaps = {
  Marker: firstMarker,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
