<template>
  <div class="cek_resiko" id="cek_resiko">
<!-- Start: wraper -->
    <div class="container-fluid wraper" style="padding-top: 50px;background-color: #222222;padding-right: 0px;padding-left: 0px;">
        <!-- Start: header-logo -->
        <div class="row header">
            <div class="col d-flex d-lg-flex justify-content-center justify-content-lg-center">
                <!-- Start: logo bla -->
                <div id="logo-header" style="margin-bottom: 20px;"><img src="static/image/logo-bla.png" width="200px"></div>
                <!-- End: logo bla -->
            </div>
        </div>
        <!-- End: header-logo -->
        <!-- Start: header-text -->
        <div class="row header" style="margin-bottom: 50px;">
            <div class="col justify-content-center justify-content-lg-center">
                <!-- Start: header-text -->
                <div>
                    <h1 class="text-center" style="font-family: Poppins, sans-serif;font-weight: 800;color: #e2e2e2; padding:0 10% 0 10%;">BANDUNG LAUTAN <span style="color: #b40b10;">API</span></h1>
                </div>
                <!-- End: header-text -->
                <!-- Start: sub-header -->
                <div>
                    <h4 class="text-center" style="font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2;">Jalan buntu memadamkan api di Kota Bandung.</h4>
                </div>
                <!-- End: sub-header -->
            </div>
        </div>
        <!-- End: header-text -->
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-10 col-lg-4 offset-1" style="margin-bottom: 20px;">
                <div>
                  <p class="text-left" style="font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2;" >Masukan nama jalan dan tekan enter untuk melihat lokasi yang disarankan, jika alamat tidak muncul coba masukan nama kelurahan atau kecamatan, atau langsung tekan tombol merah untuk mengetahui lokasi
            saat ini. atau klik langsung di peta untuk lokasi yang lebih akurat.<br></p>
          <div class="input-group">
            <div class="input-group-prepend"><span class="input-group-text">Cari Lokasi</span></div><input
              class="border rounded-0 shadow-sm form-control" type="text" v-model="alamat"
              v-on:keyup.enter="suggest(alamat)">
            <div class="input-group-append"><button class="btn" style="background-color: #b40b10;font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2; outline: none !important;
   box-shadow: none;" type="button"
                v-on:click="find_coor"><i class="fas fa-map-marker-alt"></i></button></div>
          </div>
          <div class="list-group list-group-flush sugest" style="padding-top: 20px;">
            <span v-html="render_suggest"></span>
          </div>
          <div id="warning" class="alert alert-warning" role="alert" style="margin-top: 20px; background-color: #b40b10; font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2; border:none;">
            <h3>{{status}}</h3>
            <hr style="border-color:white;">
            <p id="warningmsg">Selama tahun 2018 kecamatan {{rskecamatan}} telah terjadi {{jml_kebakaran18}} kebakaran
              dan
              {{jml_kebakaran19}} kebakaran terjadi
              di tahun 2019, dengan durasi kebakaran terlama {{durasi_kebakaran}} Menit, dengan rata-rata durasi selama
              {{avg_durasi_kebakaran}} Menit. {{top_penyebab}} menjadi penyebab kebakaran yang paling banyak.</p>
          </div>
                </div>
            </div>
            <div class="col-10 col-lg-6 offset-1 offset-lg-0">
                <div id="mapid" class="rounded" style="min-height: 500px;background-color: #f5f5f5;"></div>
            </div>
        </div>
        <!-- Start: konten -->
        <div class="row konten" style="padding-right: 10%;padding-left: 10%;">
            <div class="col-sm-12 col-lg-6 offset-lg-3" style="margin-bottom: 20px;">
                <p style="color: #e2e2e2;">Wakil Komandan Batalyon III Dinas Kebakaran dan Penanggulangan Bencana (Diskar PB) Kota Bandung, Dadang Rachmat mengungkapkan, ada beberapa tantangan memenuhi panggilan darurat kebakaran atau kebencanaan di Kota Bandung. Mulai dari menembus
                    macetnya lalu lintas hingga ruas jalan yang tidak memadai untuk dilalui branwir.&nbsp;<br><br>“Standar minimal pelayanan itu yang merapat saat ada laporan adalah dua mobil pancar dan satu mobil rescue,” imbuh Dadang.<br><br>Data Sarana
                    Unit Mobil Pemadam dan Bencana Diskar PB Kota Bandung tahun 2019 melansir ada 20 branwir pancar kapasitas 4 ribu liter serta dua branwir tangki kapasitas 8 ribu liter di Kota Bandung. Secara umum, branwir yang memanfaatkan truk merek
                    Hino seri 500 itu rata-rata memiliki lebar maksimal 3,5 meter dan tinggi empat meter setelah ditambah aksesoris. Panjangnya sendiri sekitar tujuh sampai delapan meter.<br><br>Kepala Bidang Kesiapsiagaan Operasi Pemadam dan Penyelamatan
                    Diskar PB Kota Bandung, Yusuf Hidayat mengatakan, branwir dengan dimensi seperti itu tidak bisa mengakses seluruh ruas jalan, terutama pemukiman padat di Bandung. “Kadang lebar jalan tidak memadai jadi harus memanjangkan selang. Ada
                    juga yang kadang diportal jalannya,” imbuh Yusuf.<br><br>Upaya lain yang bisa dilakukan warga adalah mengidentifikasi sumber-sumber air yang bisa diakses saat terjadi kebakaran di wilayah sekitarnya. Yusuf mengatakan, petugas di unit-unit
                    pelaksana teknis juga terus mendata kemungkinan air baku atau air sungai yang bisa dimanfaatkan saat terjadi kebakaran.<br><br>Dadang menambahkan, tim lapangan selalu membutuhkan pasokan air tanpa henti saat melakukan pemadaman. “Karena
                    kita tahu 95 persen lebih hidran yang ada di Bandung itu tekanannya rendah. Sementara kebutuhan mengisi tangki buat kapasitas empat ribu liter dan kembali ke lokasi diusahakan kurang dari lima belas menit,” imbuh Dadang.&nbsp;<br></p>
            </div>
        </div>
        <!-- End: konten -->
        <!-- Start: footer-wraper -->
        <div style="margin-top: 50px;background-color: #1a1a1a;width: auto;">
            <!-- Start: footer -->
            <div class="row footer" style="padding-top: 10px;">
                <!-- Start: logo -->
                <div class="col d-flex d-lg-flex justify-content-center justify-content-lg-center">
                    <a class="my-auto" href="http://idjnetwork.org/" target="_blank">
                        <div style="padding: 10px;"><img src="static/image/logo-idjn.png" width="32px"></div>
                    </a>
                    <a href="http://github.com/gawirable/lautanapi" target="_blank">
                        <div class="d-inline-block" style="padding: 10px;"><img src="static/image/logo-github.png" width="32px"></div>
                    </a>
                    <a href="http://lautanapi.netlify.app/">
                        <div class="d-inline-block" style="padding: 10px;"><img src="static/image/logo-bla.png" width="32px"></div>
                    </a>
                </div>
                <!-- End: logo -->
            </div>
            <!-- End: footer -->
            <!-- Start: footer-text -->
            <div class="row footer-text">
                <div class="col d-lg-flex justify-content-lg-center">
                    <!-- Start: footer text -->
                    <div>
                        <p class="text-center" style="font-family: Roboto, sans-serif;font-weight: 400;font-size: 10px;color: #e2e2e2;">DATA JURNALISM HACKATHON 2020</p>
                    </div>
                    <!-- End: footer text -->
                </div>
            </div>
            <!-- End: footer-text -->
        </div>
        <!-- End: footer-wraper -->
    </div>
    <!-- End: wraper -->
    
    
    <a href="#cek_resiko">
      <div class="totop rounded"><i class="fas  fa-arrow-up"></i></div>
    </a>
    <router-link to="/">
      <div class="tohome rounded"><i class="fas  fa-home"></i></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CekResiko",
    data() {
      return {
        msg: "Lautan Api - Cek Resiko",
        alamat: "",
        render_suggest: "",
        koordinat: [],
        status: "",
        root_kecamatan: [],
        coords_kota: [],
        coords_rev_kota: [],
        coords: [],
        coords_rev: [],
        roots_data: {},
        jml_kebakaran18: 0,
        jml_kebakaran19: 0,
        durasi_kebakaran: 0,
        avg_durasi_kebakaran: 0,
        top_penyebab: "",
        rskecamatan: "",
      };
    },
    methods: {
      //---------------------------------------------------------------------------------------------------------------------
      suggest: function (alamat) {
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
                .run(function (error, result) {
                  if (error) {
                    return;
                  }
                  self.render_suggest =
                    self.render_suggest +
                    '<a id="sgs' + i + '" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><span>' +
                    result.address.Match_addr +
                    '</span><span class="badge badge-primary" style="background-color: #b40b10;"><i class="fas fa-location-arrow"></i></span></a>';
                  //console.log(self.render_suggest);
                });
            }
          });
        $(".sugest").show();
      },
      //---------------------------------------------------------------------------------------------------------------------
      find_coor: function () {
        var self = this;
        mymap.locate({ setView: true, maxZoom: 16 });
        mymap.on("locationfound", this.onLocationFound);
        mymap.on("locationerror", this.onLocationError);
      },
      onLocationFound: function (e) {
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
              $("#warning").show();
              $("#warningmsg").show();
              self.status = "Anda Berada di Kecamatan: " + self.root_kecamatan[i].feature.properties.nama_kecamatan;
              self.rskecamatan = self.root_kecamatan[i].feature.properties.nama_kecamatan
              break;
            }
          }
        } catch (err) {
          pesan = "Anda Berada diluar kota bandung ";
          $("#warning").show();
          $("#warningmsg").hide();
          self.status = "Anda Berada diluar kota bandung ";
        }
        self.csvquery(self.rskecamatan);

        //geocoding
        geocodeService
          .reverse()
          .latlng(e.latlng)
          .run(function (error, result) {
            if (error) {
              return;
            }
            if (theMarker != undefined) {
              mymap.removeLayer(theMarker);
            }
            theMarker = L.marker(result.latlng, { icon: pin })
              .addTo(mymap)
              .bindPopup(result.address.Match_addr)
              .openPopup();
          });
      }, //end onlocationfound
      onLocationError: function (e) {
        alert(e.message);
      },
      //---------------------------------------------------------------------------------------------------------------------
      csvquery: function (kecamatan) {
        // alasql csv
        var self = this;
        var query =
          'SELECT `*` FROM CSV("static/data/fix-detail-1819.csv", {headers:true})';
        var qkcmtn18 =
          'SELECT `*` FROM CSV("static/data/fix-detail-1819.csv", {headers:true}) where Kecamatan="' + kecamatan + '" and year(Tanggal) = 2018';
        var qkcmtn19 =
          'SELECT `*` FROM CSV("static/data/fix-detail-1819.csv", {headers:true}) where Kecamatan="' + kecamatan + '" and year(Tanggal) = 2019';
        var qmaxdurasi =
          'SELECT MAX(`Durasi`) as durasi FROM CSV("static/data/fix-detail-1819.csv", {headers:true}) where Kecamatan="' + kecamatan + '"';
        var qavgdurasi =
          'SELECT AVG(`Durasi`) as avgdurasi FROM CSV("static/data/fix-detail-1819.csv", {headers:true}) where Kecamatan="' + kecamatan + '"';
        var qtoppenyebab =
          'SELECT TOP 1 `Penyebab_Kebakaran` as toppenyebab FROM CSV("static/data/fix-detail-1819.csv", {headers:true}) where Kecamatan="' + kecamatan + '" and Penyebab_Kebakaran !="Dalam Penyelidikan" and Penyebab_Kebakaran!=0';
        for (let i = 1; i <= 5; i++) {
          if (i == 1) {
            alasql.promise(qkcmtn18).then(function (data) {
              // console.log( typeof data);
              self.jml_kebakaran18 = data.length;
            }).catch(function (err) {
              console.log("Error:", err);
            });
          }
          else if (i == 2) {
            alasql.promise(qkcmtn19).then(function (data) {
              // console.log( typeof data);
              self.jml_kebakaran19 = data.length;
            }).catch(function (err) {
              console.log("Error:", err);
            });
          }
          else if (i == 3) {
            alasql.promise(qmaxdurasi).then(function (data) {
              // console.log( typeof data);
              self.durasi_kebakaran = data[0].durasi;
            }).catch(function (err) {
              console.log("Error:", err);
            });
          }
          else if (i == 4) {
            alasql.promise(qavgdurasi).then(function (data) {
              // console.log( typeof data);
              self.avg_durasi_kebakaran = data[0].avgdurasi.toFixed(2);
            }).catch(function (err) {
              console.log("Error:", err);
            });
          }
          else if (i == 5) {
            alasql.promise(qtoppenyebab).then(function (data) {
              // console.log( typeof data);
              self.top_penyebab = data[0].toppenyebab;
            }).catch(function (err) {
              console.log("Error:", err);
            });
          }

        }
        return
      }
    }, //end methode
    created: function () {
      var self = this;
    },
    mounted: function () {
      var self = this;
      $("#warning").hide();
      //---------------------------------------------------------------------------------------------------------------------
      //center & zoom map
      global.mymap = L.map("mapid").setView([-6.9174639, 107.6191228], 15);
      //map themes
      L.tileLayer.provider(map_themes).addTo(mymap);

      //create marker
      global.theMarker = L.marker([-6.9174639, 107.6191228], { icon: pin })
        .addTo(mymap)
        .bindPopup(
          "<h2>Selamat datang</h2><hr><p>Silahkan masukan alamat rumah anda, atau klik pada peta dan geser pin dibawah ini.</p>"
        )
        .openPopup();
      //---------------------------------------------------------------------------------------------------------------------
      var self = this;
      $(".sugest").hide();

      //---------------------------------------------------------------------------------------------------------------------
      //geojson batas kota
      $.getJSON("static/data/map-kota.json", function (data_kota) {
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
      $.getJSON("static/data/map-kecamatan.json", function (data_kecamatan) {
        // add GeoJSON layer to the map once the file is loadeda
        var datalayer = L.geoJson(data_kecamatan, {
          onEachFeature: function (feature, featureLayer) {
            self.root_kecamatan.push(
              featureLayer.bindPopup(feature.properties.nama_kecamatan)
            );
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
        // var polygon = L.polygon(self.coords_rev).addTo(mymap);
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
              $("#warning").show();
              $("#warningmsg").show();
              self.status = "Anda Berada di Kecamatan: " + self.root_kecamatan[i].feature.properties.nama_kecamatan;
              self.rskecamatan = self.root_kecamatan[i].feature.properties.nama_kecamatan
              break;
            }
          }
        } catch (err) {
          pesan = "Anda Berada diluar kota bandung ";
          $("#warning").show();
          $("#warningmsg").hide();
          self.status = "Anda Berada diluar kota bandung ";
        }
        self.csvquery(self.rskecamatan);

        //geocoding
        geocodeService
          .reverse()
          .latlng(e.latlng)
          .run(function (error, result) {
            if (error) {
              return;
            }
            if (theMarker != undefined) {
              mymap.removeLayer(theMarker);
            }
            theMarker = L.marker(result.latlng, { icon: pin })
              .addTo(mymap)
              .bindPopup(result.address.Match_addr)
              .openPopup();
          });
      }); //end on click
    }, //end mounted
    updated: function () {
      //---------------------------------------------------------------------------------------------------------------------
      var self = this;
      for (let i = 0; i < 5; i++) {
        $("#sgs" + i).click(function () {
          self.alamat = $("#sgs" + i).text();
          Geocoding.geocode()
            .text(self.alamat)
            .run((err, results, response) => {
              self.koordinat = results.results[0].latlng;
              if (theMarker != undefined) {
                mymap.removeLayer(theMarker);
              }
              theMarker = L.marker(results.results[0].latlng, { icon: pin })
                .addTo(mymap)
                .bindPopup(self.alamat)
                .openPopup();
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
                    $("#warning").show();
                    $("#warningmsg").show();
                    self.status = "Anda Berada di Kecamatan: " + self.root_kecamatan[i].feature.properties.nama_kecamatan;
                    self.rskecamatan = self.root_kecamatan[i].feature.properties.nama_kecamatan
                    break;
                  }
                }
              } catch (err) {
                pesan = "Anda Berada diluar kota bandung ";
                $("#warning").show();
                $("#warningmsg").hide();
                self.status = "Anda Berada diluar kota bandung ";
              }
              self.csvquery(self.rskecamatan);
            });
        });
      } //end for
    } //end updated
  }; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>