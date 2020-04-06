<template>
  <div class="cegah_kebakaran">
    <!--<img src="../assets/logo.png">-->
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ msg }}</h1>
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