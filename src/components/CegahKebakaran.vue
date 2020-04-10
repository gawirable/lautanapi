<template>
  <div class="cegah_kebakaran">
    <!--<img src="../assets/logo.png">-->
    <!-- Start: Navigation Dark Clean -->
    <nav class="navbar navbar-dark navbar-expand-md bg-dark navigation-clean">
        <div class="container"><a class="navbar-brand" href="#">Bandung Lautan Api</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><router-link to="/" class="nav-link">Beranda</router-link> </li>
                    <li class="nav-item" role="presentation"><router-link to="/data" class="nav-link ">Data</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/cek-resiko" class="nav-link ">Cek Resiko</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/cegah-kebakaran" class="nav-link active">Cegah Kebakaran</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End: Navigation Dark Clean -->
    <div class="container border rounded shadow-sm" style="margin-top: 20px;width: 95%;padding: 20px;">
        <h3>{{ msg }}</h3>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "CegahKebakaran",
  data() {
    return {
      msg: "Lautan Api - Cegah Kebakaran"
    };
  },
  methods: {}, //end methode
  created: function() {}, //end created
  mounted: function() {}, //end mounted
  updated: function() {} //end updated
}; //end export
//hitung jarak terdekat
function hitungjarak() {
  var jarak = [];
  var terpendek;
  var koor = [
    antld1,
    antld2,
    antld3,
    antld4,
    antld5,
    antld6,
    antld7,
    antld8,
    antld9,
    antld10,
    antld11,
    antld12,
    antld13,
    antld14,
    antld15,
    antld16,
    antld17,
    antld18,
    antld19,
    antld20,
    antld21,
    antld22,
    antld23,
    antld24,
    antld25,
    antld26
  ];
  var lat1 = glat;
  var lon1 = glng;
  terpendek = 0;
  //seleksi jarak terpendek dari user-ways point
  for (i = 0; i < koor.length; i++) {
    var lat2 = koor[i].lat();
    var lon2 = koor[i].lng();
    var R = 6371; // Radius of the earth in km
    var dLat = ((lat2 - lat1) * Math.PI) / 180; // deg2rad below
    var dLon = ((lon2 - lon1) * Math.PI) / 180;
    var a =
      0.5 -
      Math.cos(dLat) / 2 +
      (Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        (1 - Math.cos(dLon))) /
        2;
    var d = R * 2 * Math.asin(Math.sqrt(a));
    jarak[i] = d;
  }
  terpendek = jarak.min();

  //mencari kordinat
  for (i = 0; i < koor.length; i++) {
    var lat2 = koor[i].lat();
    var lon2 = koor[i].lng();
    var R = 6371; // Radius of the earth in km
    var dLat = ((lat2 - lat1) * Math.PI) / 180; // deg2rad below
    var dLon = ((lon2 - lon1) * Math.PI) / 180;
    var a =
      0.5 -
      Math.cos(dLat) / 2 +
      (Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        (1 - Math.cos(dLon))) /
        2;
    var d = R * 2 * Math.asin(Math.sqrt(a));
    if (d == terpendek) {
      return [terpendek, koor[i]];
    }
  }
} // end function hitung jarak terdekat
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>