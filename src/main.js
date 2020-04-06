// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// import jquery
global.$ = require("jquery");
global.jQuery = require("jquery");

// import bootstrap & popper
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/esm/popper.js";
import "bootstrap/dist/js/bootstrap.js";

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
