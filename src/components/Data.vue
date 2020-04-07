<template>
  <div class="data">
    <!--<img src="../assets/logo.png">-->
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt />
        {{ msg }}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/data" class="nav-link">Data</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cek-resiko" class="nav-link">Cek Resiko</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cegah-kebakaran" class="nav-link">Cegah Kebakaran</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar -->
    <!-- main container -->
    <main role="main" class="container">
      <!-- // -->
      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
        <img class="mr-3" src="../assets/logo.png" alt width="48" height="48" />
        <div class="lh-100">
          <h6 class="mb-0 text-white lh-100">Bootstrap</h6>
          <small>Since 2011</small>
        </div>
      </div>
      <!-- // -->
      <div
        class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm"
        id="mapdata"
      ></div>
      <!-- // -->
    </main>
    <!-- main container -->
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      msg: "Lautan Api - Data"
    };
  },
  methods: {
    //---------------------------------------------------------------------------------------------------------------------
    suggest: function(alamat) {
      var self = this;
      self.render_suggest = "";
      // get address suggest
      Geocoding.geocode()
        .text(alamat)
        .run((err, results, response) => {
          //console.log(results.results.length);
          for (let i = 0; i < results.results.length && i < 5; i++) {
            //console.log(results.results[i].latlng);
            // reverse geocoding
            geocodeService
              .reverse()
              .latlng(results.results[i].latlng)
              .run(function(error, result) {
                if (error) {
                  return;
                }
                self.render_suggest =
                  self.render_suggest +
                  '<li id="sgs' +
                  i +
                  '" class="list-group-item">' +
                  result.address.Match_addr +
                  "</li>";
                //console.log(self.render_suggest);
              });
          }
        });
      $(".sugest").show();
    },
    //---------------------------------------------------------------------------------------------------------------------
    find_coor: function() {
      var self = this;
      mymap.locate({ setView: true, maxZoom: 16 });
      mymap.on("locationfound", this.onLocationFound);
      mymap.on("locationerror", this.onLocationError);
    },
    onLocationFound: function(e) {
      var self = this;
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
            self.status =
              "Anda Berada di Kecamatan: " +
              self.root_kecamatan[i].feature.properties.nama_kecamatan;
            break;
          }
        }
      } catch (err) {
        pesan = "Anda Berada diluar kota bandung ";
        self.status = "Anda Berada diluar kota bandung ";
      }
      console.log(pesan);

      //geocoding
      geocodeService
        .reverse()
        .latlng(e.latlng)
        .run(function(error, result) {
          if (error) {
            return;
          }
          if (theMarker != undefined) {
            mymap.removeLayer(theMarker);
          }
          theMarker = L.marker(result.latlng, { icon: greenIcon })
            .addTo(mymap)
            .bindPopup(result.address.Match_addr)
            .openPopup();
        });
    }, //end onlocationfound
    onLocationError: function(e) {
      alert(e.message);
    }
    //---------------------------------------------------------------------------------------------------------------------
  }, //end methode
  created: function() {}, //end created
  mounted: function() {
    //center & zoom map
    global.mymap = L.map("mapdata").setView([-6.9174639, 107.6191228], 15);
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
      );
    // marker 2
    global.theMarker = L.marker([-6.9009066, 107.6096925], { icon: greenIcon })
      .addTo(mymap)
      .bindPopup(
        "<h2>Selamat datang</h2><hr><p>Silahkan masukan alamat rumah anda, atau klik pada peta dan geser pin dibawah ini.</p>"
      );
  }, //end mounted
  updated: function() {} //end updated
}; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapdata {
  min-height: 400px;
}
</style>