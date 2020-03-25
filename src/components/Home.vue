<template>
  <div class="home">
    <!--<img src="../assets/logo.png">-->
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ msg }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div id="mapid" style="width: 100%; height: 400px;"></div>
          <div id="mapbox" style="width: 100%; height: 400px;"></div>
        </div>
        <div class="col-md-4">
          <div clas="row">
            <div class="input-group mb-3">
              <input type="text" class="form-control basicAutoComplete" autocomplete="off" placeholder="Alamat Rumah"
                v-model="alamat" v-on:keyup.enter="suggest(alamat)">
              <button type="button" class="" v-on:click="find_coor">Lokasi Saat ini</button>
            </div>

          </div>
          <div class="row suges">
            <div class="col-md-12">
              <ul class="list-group list-group-flush sugest">
                <span v-html="render_suggest"></span>
              </ul>
            </div>
          </div>
          <div clas="row">
            <div class="jumbotron">
              <h5 class="display-5">Cek Resiko Kebakaran</h5>
              <hr class="my-4">
              <p>{{status}}</p>
              <hr class="my-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        msg: "Lautan Api",
        alamat: "",
        render_suggest: "",
        koordinat: [],
        status: "",
        root_kecamatan: [],
        coords_kota: [],
        coords_rev_kota: [],
        coords: [],
        coords_rev: []
      };
    },
    methods: {
      //---------------------------------------------------------------------------------------------------------------------
      suggest: function (alamat) {
        var self = this;
        self.render_suggest = "";
        // get address suggest
        Geocoding.geocode().text(alamat)
          .run((err, results, response) => {
            //console.log(results.results.length);
            for (let i = 0; (i < results.results.length) && (i < 5); i++) {
              //console.log(results.results[i].latlng);
              // reverse geocoding
              geocodeService.reverse().latlng(results.results[i].latlng).run(function (error, result) {
                if (error) {
                  return;
                }
                self.render_suggest = self.render_suggest + '<li id="sgs' + i + '" class="list-group-item">' + result.address.Match_addr + '</li>';
                //console.log(self.render_suggest);
              })
            }
          });
        $(".sugest").show();
      },
      //---------------------------------------------------------------------------------------------------------------------
      find_coor: function () {
        var self = this;
        mymap.locate({ setView: true, maxZoom: 16 });
        mymap.on('locationfound', this.onLocationFound);
        mymap.on('locationerror', this.onLocationError);
      },
      onLocationFound: function (e) {
        var self = this
        var str = e.latlng.toString();
        var curpos = str
          .substring(7)
          .replace(")", "")
          .replace(" ", "")
          .split(",");
        var pesan = "";

        //cari kecamatan
        try {
          for (let i = 0; i <= self.coords_rev.length; i++) {
            inside(curpos, self.coords_rev[i]);
            if (inside(curpos, self.coords_rev[i])) {
              pesan = "inside polygon: " + i;
              self.status = "Anda Berada di Kecamatan: " + self.root_kecamatan[i].feature.properties.nama_kecamatan;
              break;
            }
          }
        } catch (err) {
          pesan = "Anda Berada diluar kota bandung ";
          self.status = "Anda Berada diluar kota bandung "
        }
        console.log(pesan);

        //geocoding
        geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
          if (error) {
            return;
          }
          if (theMarker != undefined) {
            mymap.removeLayer(theMarker);
          };
          theMarker = L.marker(result.latlng, { icon: greenIcon }).addTo(mymap).bindPopup(result.address.Match_addr).openPopup();
        })

      },//end onlocationfound
      onLocationError: function (e) {
        alert(e.message);
      }
      //---------------------------------------------------------------------------------------------------------------------
    },
    //end methode
    created: function () {

    },
    mounted: function () {
      //---------------------------------------------------------------------------------------------------------------------
      //center & zoom map
      global.mymap = L.map("mapid").setView([-6.9174639, 107.6191228], 15);
      //map themes
      L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(mymap);
      // marker icon
      global.greenIcon = L.icon({
        iconUrl: require("../assets/images/marker-icon.png"),
        shadowUrl: require("../assets/images/marker-shadow.png"),
        iconSize: [25, 41], // size of the icon
        shadowSize: [41, 41] // size of the shadow
      });
      //create marker
      global.theMarker = L.marker([-6.9174639, 107.6191228], { icon: greenIcon })
        .addTo(mymap)
        .bindPopup(
          "<h2>Selamat datang</h2><hr><p>Silahkan masukan alamat rumah anda, atau klik pada peta dan geser pin dibawah ini.</p>"
        ).openPopup();
      //---------------------------------------------------------------------------------------------------------------------
      var self = this;
      $(".sugest").hide();

      //---------------------------------------------------------------------------------------------------------------------
      //geojson batas kota
      $.getJSON("static/map-kota.json", function (data_kota) {

        // add GeoJSON layer to the map once the file is loaded
        var datalayer = L.geoJson(data_kota, {
          onEachFeature: function (feature, featureLayer) {
            self.coords_kota.push(feature.geometry.coordinates[0]);
          }
        });

        //flip coordinate
        for (let i = 0; i < self.coords_kota.length; i++) {
          self.coords_rev_kota[i] = [];
          for (let ii = 0; ii < self.coords_kota[i].length; ii++) {
            self.coords_rev_kota[i][ii] = self.coords_kota[i][ii].reverse();
          }
        }
        //create polygon kecamatan
        //var polygon_kota = L.polygon(coords_rev_kota).addTo(mymap);
      });

      //geojson batas kecamatan
      $.getJSON("static/map-kecamatan.json", function (data) {

        // add GeoJSON layer to the map once the file is loadeda
        var datalayer = L.geoJson(data, {
          onEachFeature: function (feature, featureLayer) {
            self.root_kecamatan.push(featureLayer.bindPopup(feature.properties.nama_kecamatan));
            self.coords.push(feature.geometry.coordinates[0]);
          }
        });

        //flip coordinate
        for (let i = 0; i < self.coords.length; i++) {
          self.coords_rev[i] = [];
          for (let ii = 0; ii < self.coords[i].length; ii++) {
            self.coords_rev[i][ii] = self.coords[i][ii].reverse();
          }
        }
        //create polygon kecamatan
        var polygon = L.polygon(self.coords_rev).addTo(mymap);
      });
      //---------------------------------------------------------------------------------------------------------------------

      mymap.on("click", function mapClickListen(e) {
        //cek poly on click
        var str = e.latlng.toString();
        var curpos = str
          .substring(7)
          .replace(")", "")
          .replace(" ", "")
          .split(",");
        var pesan = "";

        //cari kecamatan
        try {
          for (let i = 0; i <= self.coords_rev.length; i++) {
            inside(curpos, self.coords_rev[i]);
            if (inside(curpos, self.coords_rev[i])) {
              pesan = "inside polygon: " + i;
              self.status = "Anda Berada di Kecamatan: " + self.root_kecamatan[i].feature.properties.nama_kecamatan;
              break;
            }
          }
        } catch (err) {
          pesan = "Anda Berada diluar kota bandung ";
          self.status = "Anda Berada diluar kota bandung "
        }
        console.log(pesan);

        //geocoding
        geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
          if (error) {
            return;
          }
          if (theMarker != undefined) {
            mymap.removeLayer(theMarker);
          };
          theMarker = L.marker(result.latlng, { icon: greenIcon }).addTo(mymap).bindPopup(result.address.Match_addr).openPopup();
        })

      });//end on click
    },//end mounted
    updated: function () {
      //---------------------------------------------------------------------------------------------------------------------
      var self = this;
      for (let i = 0; i < 5; i++) {
        $("#sgs" + i).click(function () {
          self.alamat = $("#sgs" + i).text();
          Geocoding.geocode().text(self.alamat)
            .run((err, results, response) => {
              self.koordinat = results.results[0].latlng;
              if (theMarker != undefined) {
                mymap.removeLayer(theMarker);
              };
              theMarker = L.marker(results.results[0].latlng, { icon: greenIcon }).addTo(mymap).bindPopup(self.alamat).openPopup();
              self.render_suggest = "";
              //cari kecamatan
              var str = results.results[0].latlng.toString();
              var curpos = str
                .substring(7)
                .replace(")", "")
                .replace(" ", "")
                .split(",");
              var pesan = "";

              try {
                for (let i = 0; i <= self.coords_rev.length; i++) {
                  inside(curpos, self.coords_rev[i]);
                  if (inside(curpos, self.coords_rev[i])) {
                    pesan = "inside polygon: " + i;
                    self.status = "Anda Berada di Kecamatan: " + self.root_kecamatan[i].feature.properties.nama_kecamatan;
                    break;
                  }
                }
              } catch (err) {
                pesan = "Anda Berada diluar kota bandung ";
                self.status = "Anda Berada diluar kota bandung "
              }
              console.log(pesan);
            });
        });
      }//end for
    }//end updated
  };//end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>