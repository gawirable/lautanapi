<template>
  <div class="data">
    <!--<img src="../assets/logo.png">-->
    <!-- Start: Navigation Dark Clean -->
    <nav class="navbar navbar-dark navbar-expand-md bg-dark navigation-clean">
      <div class="container"><a class="navbar-brand" href="#">Bandung Lautan Api</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse"
              id="navcol-1">
              <ul class="nav navbar-nav ml-auto">
                  <li class="nav-item" role="presentation"><router-link to="/" class="nav-link ">Beranda</router-link> </li>
                  <li class="nav-item" role="presentation"><router-link to="/data" class="nav-link active ">Data</router-link></li>
                  <li class="nav-item" role="presentation"><router-link to="/cek-resiko" class="nav-link ">Cek Resiko</router-link></li>
                  <li class="nav-item" role="presentation"><router-link to="/cegah-kebakaran" class="nav-link ">Cegah Kebakaran</router-link></li>
              </ul>
          </div>
      </div>
  </nav>
  <!-- End: Navigation Dark Clean -->
    <div class="container border rounded shadow-sm" style="margin-top: 20px;width: 95%;padding: 20px;">
      <h3>{{msg}}</h3>
      <hr>
      <div class="row">
          <div class="col-sm-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quisenim dignissim, aliquet elit in, facilisis nibh. Nullam in efficitur mi. Duis maximus est eu nulla egestas, sit amet elementum velit feugiat. Proin id molestie arcu.
                  In et pulvinar libero. In convallis libero nec <br>massa mollis facilisis. Morbi egestas nec mi at molestie.<br></p>
          </div>
          <div class="col-sm-7"><div id="mapdata" width="100%" height="400"></div></div>
      </div>
  </div>
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
    methods: {}, //end methode
    created: function () { }, //end created
    mounted: function () {
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
    updated: function () { } //end updated
  }; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mapdata {
    min-height: 400px;
  }
</style>