<template>
  <div class="data">
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
  mounted: function() {}, //end mounted
  updated: function() {} //end updated
}; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>