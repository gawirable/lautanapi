// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// import jquery
global.$ = require("jquery");
global.jQuery = require("jquery");
// register icon marker
global.hidrannon = L.icon({
  iconUrl: require("../static/icon/hidran-non.png"),
  iconSize: [14, 32.5], // size of the icon
  popupAnchor:  [0, -15],
});
global.hidranaktif = L.icon({
  iconUrl: require("../static/icon/hidran-aktif.png"),
  iconSize: [14, 32.5], // size of the icon
  popupAnchor:  [0, -15],
});
global.pin = L.icon({
  iconUrl: require("../static/icon/pin.png"),
  iconSize: [37, 65], // size of the icon
  popupAnchor:  [5, -35],
});
global.uptd = L.icon({
  iconUrl: require("../static/icon/uptd.png"),
  iconSize: [65, 56], // size of the icon
  popupAnchor:  [5, -35],
});
global.pusat = L.icon({
  iconUrl: require("../static/icon/pusat.png"),
  iconSize: [52, 65], // size of the icon
  popupAnchor:  [5, -35],
});

// import bootstrap & popper
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/esm/popper.js";
import "bootstrap/dist/js/bootstrap.js";
// bootstrap themes and template
import "../static/plugin/template/css/Navigation-Dark-Clean.css"
import "../static/plugin/template/css/styles.css"

// install font-awesome
import "@fortawesome/fontawesome-free/css/all.css"

// import leaflet js
require("../node_modules/leaflet/dist/leaflet.css");
require("../node_modules/leaflet/dist/leaflet.js");

// import leaflet themes
require("./assets/plugin/leaflet-providers.js");

// geocoding
import * as geocode from "esri-leaflet-geocoder";
global.Geocoding = geocode;

// get geocodding function
global.geocodeService = Geocoding.geocodeService();

// function ray casting algorithm
global.inside = require("point-in-polygon");

// install alasql
global.alasql = require("alasql");

// --------------------------------------------------------------------------
Vue.config.productionTip = false;

new Vue({
  data: {
    //Geocoding:geocode,
  },
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
