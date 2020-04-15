<template>
  <div class="data">
    <!--<img src="../assets/logo.png">-->
    <!-- Start: Navigation Dark Clean -->
    <nav class="navbar navbar-dark navbar-expand-md bg-dark navigation-clean">
      <div class="container"><a class="navbar-brand" href="#">Bandung Lautan Api</a><button data-toggle="collapse"
          class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <router-link to="/" class="nav-link ">Beranda</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/data" class="nav-link active ">Data</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/cek-resiko" class="nav-link ">Cek Resiko</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/cegah-kebakaran" class="nav-link ">Cegah Kebakaran</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End: Navigation Dark Clean -->
    <div class="container border rounded shadow-sm" style="margin-top: 20px;width: 95%;padding: 20px;">
      <h3>{{msg}}</h3>
      <hr>
      <div class="row">
        <div class="col-sm-12">
          <div id="mapdata" width="100%" height="400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Data",
    data() {
      return {
        msg: "Lautan Api - Data",
        root_hidran: [],
        coords: [],
        coords_rev: [],
      };
    },
    methods: {}, //end methode
    created: function () { }, //end created
    mounted: function () {
      var self = this;
      //center & zoom map
      global.mymap = L.map("mapdata").setView([-6.9174639, 107.6191228], 15);
      //map themes
      L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(mymap);
      
      //geojson data hidran
      $.getJSON("static/map-hidran.json", function (data_hidran) {
        // add GeoJSON layer to the map once the file is loadeda
        var datalayer = L.geoJson(data_hidran, {
          onEachFeature: function (feature, featureLayer) {
            self.root_hidran.push(
              feature.properties.alamat
            );
            self.coords.push(feature.geometry.coordinates.reverse());
          }
        });

        //create marker
        for (let i = 0; i < self.coords.length; i++) {
          // marker hijau 
          if (i == 24 || i == 30 || i == 93) {
            global.theMarker = L.marker(self.coords[i], { icon: hidranaktif })
          .addTo(mymap)
          .bindPopup(
            "<p>Hidran " + i + ", Alamat: " + self.root_hidran[i] + "</p>"
          ); 
          }
          else{
            global.theMarker = L.marker(self.coords[i], { icon: hidrannon })
          .addTo(mymap)
          .bindPopup(
            "<p>Hidran " + i + ", Alamat: " + self.root_hidran[i] + "</p>"
          );
          }
          
        }
        
      });

    }, //end mounted
    updated: function () { } //end updated
  }; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mapdata {
    min-height: 400px;
  }
</style>