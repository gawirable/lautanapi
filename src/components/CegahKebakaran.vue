<template>
  <div class="cegah_kebakaran">
    <!--<img src="../assets/logo.png">-->
    <!-- Start: Navigation Dark Clean -->
    <nav class="navbar navbar-dark navbar-expand-md bg-dark navigation-clean">
      <div class="container"><a class="navbar-brand" href="#">Bandung Lautan Api</a><button data-toggle="collapse"
          class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <router-link to="/" class="nav-link">Beranda</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/data" class="nav-link ">Data</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/cek-resiko" class="nav-link ">Cek Resiko</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/cegah-kebakaran" class="nav-link active">Cegah Kebakaran</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End: Navigation Dark Clean -->
    <div class="container border rounded shadow-sm" style="margin-top: 20px;width: 95%;padding: 20px;">
      <h3>{{ msg }}</h3>
      <hr>
      <div class="row">
        <div class="col-sm-5">
          <button class="btn btn-primary shadow-sm btn-block" type="button" v-on:click="find_coor">Cek lokasi saat ini
            <i class="fas fa-map-marker-alt"></i></button>
          <div class="alert alert-warning" role="alert" style="margin-top: 20px;">
            <h3>header</h3>
            <hr>
            <p>Selama tahun 2018 kecamatan telah terjadi kebakaran dan kebakaran terjadi
              di tahun 2019, dengan durasi kebakaran terlama Menit, dengan rata-rata durasi selama Menit. menjadi
              penyebab kebakaran yang paling banyak.</p>
          </div>
        </div>
        <div class="col-sm-7">
          <div id="mapcegahkebakaran" width="100%" height="400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CegahKebakaran",
    data() {
      return {
        msg: "Lautan Api - Cegah Kebakaran",
        root_uptd: [],
        coords: [],
        terpendek: 0,
        jarak: [],
        index_uptd:0,
        res_jarak:0,
      };
    },
    methods: {
      find_coor: function () {
        var self = this;
        mymap.locate({ setView: true, maxZoom: 16 });
        mymap.on("locationfound", this.onLocationFound);
        mymap.on("locationerror", this.onLocationError);
      },
      onLocationFound: function (e) {
        var self = this;
        //geocoding
        geocodeService
          .reverse()
          .latlng(e.latlng)
          .run(function (error, result) {
            if (error) {
              return;
            }
            global.theMarker = L.marker(result.latlng, { icon: greenIcon })
              .addTo(mymap)
              .bindPopup(
                "<p>Lokasi saat ini: " + result.address.Match_addr + " jarak terdekat anda dengan UPTD: "+self.index_uptd +", dengan jarak: "+ self.res_jarak.toFixed(2) +" Km</p>"
              ).openPopup();
          });
        // console.log(self.coords[0][1]);
        self.hitungjarak(e.latlng.lat, e.latlng.lng);
      }, //end onlocationfound
      onLocationError: function (e) {
        alert(e.message);
      },
      //hitung jarak terdekat
      hitungjarak: function (glat, glng) {
        var self = this;
        var curlat = glat;
        var curlon = glng;

        //seleksi jarak terpendek dari user-ways point
        for (let i = 0; i < self.coords.length; i++) {
          var marklat = self.coords[i][0];
          var marklon = self.coords[i][1];
          var R = 6371; // Radius of the earth in km
          var dLat = ((marklat - curlat) * Math.PI) / 180; // deg2rad below
          var dLon = ((marklon - curlon) * Math.PI) / 180;
          var a =
            0.5 -
            Math.cos(dLat) / 2 +
            (Math.cos((curlat * Math.PI) / 180) *
              Math.cos((marklat * Math.PI) / 180) *
              (1 - Math.cos(dLon))) /
            2;
          var d = R * 2 * Math.asin(Math.sqrt(a));
          self.jarak[i] = d;
        }
        self.terpendek = Math.min.apply(Math, self.jarak);

        //mencari kordinat
        for (let i = 0; i < self.coords.length; i++) {
          var marklat = self.coords[i][0];
          var marklon = self.coords[i][1];
          var R = 6371; // Radius of the earth in km
          var dLat = ((marklat - curlat) * Math.PI) / 180; // deg2rad below
          var dLon = ((marklon - curlon) * Math.PI) / 180;
          var a =
            0.5 -
            Math.cos(dLat) / 2 +
            (Math.cos((curlat * Math.PI) / 180) *
              Math.cos((marklat * Math.PI) / 180) *
              (1 - Math.cos(dLon))) /
            2;
          var d = R * 2 * Math.asin(Math.sqrt(a));
          if (d == self.terpendek) {
            self.index_uptd = i;
            self.res_jarak = self.terpendek;
            // console.log(self.coords[i] + " - " + i + " - " + self.terpendek)
            // return [self.terpendek, self.coords[i]];
          }
        }
      } // end function hitung jarak terdekat
    }, //end methode
    created: function () { }, //end created
    mounted: function () {
      var self = this;
      //center & zoom map
      global.mymap = L.map("mapcegahkebakaran").setView([-6.9174639, 107.6191228], 11);
      //map themes
      L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(mymap);
      // marker icon
      global.greenIcon = L.icon({
        iconUrl: require("../assets/images/marker-icon.png"),
        shadowUrl: require("../assets/images/marker-shadow.png"),
        iconSize: [25, 41], // size of the icon
        shadowSize: [41, 41] // size of the shadow
      });
      // geojson data hidran
      $.getJSON("static/map-uptd.json", function (data_uptd) {
        // add GeoJSON layer to the map once the file is loadeda
        var datalayer = L.geoJson(data_uptd, {
          onEachFeature: function (feature, featureLayer) {
            self.root_uptd.push(
              feature.properties.alamat
            );
            self.coords.push(feature.geometry.coordinates.reverse());
          }
        });

        // create marker
        for (let i = 0; i < self.coords.length; i++) {
          global.theMarker = L.marker(self.coords[i], { icon: greenIcon })
            .addTo(mymap)
            .bindPopup(
              "<p>UPTD " + i + ", Alamat: " + self.root_uptd[i] + "</p>"
            );
        }

      });
    }, //end mounted
    updated: function () { } //end updated
  }; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mapcegahkebakaran {
    min-height: 400px;
  }
</style>