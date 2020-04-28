<template>
  <div class="cegah_kebakaran" id="cegah_kebakaran">
    <!-- Start: wraper -->
    <div class="container-fluid wraper"
      style="padding-top: 50px;background-color: #222222;padding-right: 0px;padding-left: 0px;">
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
            <h1 class="text-center"
              style="font-family: Poppins, sans-serif;font-weight: 800;color: #e2e2e2; padding:0 10% 0 10%;">BANDUNG
              LAUTAN <span style="color: #b40b10;">API</span></h1>
          </div>
          <!-- End: header-text -->
          <!-- Start: sub-header -->
          <div>
            <h4 class="text-center"
              style="font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2; padding: 0 10% 0 10%;">15 menit
              yang menentukan</h4>
          </div>
          <!-- End: sub-header -->
        </div>
      </div>
      <!-- End: header-text -->
      <div class="row" style="margin-bottom: 50px;">
        <div class="col-10 col-sm-10 offset-1 offset-sm-1">
          <button class="btn btn-block" style="background-color: #b40b10;font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2; outline: none !important;
   box-shadow: none;" type="button" v-on:click="find_coor">Cek lokasi saat ini
            <i class="fas fa-map-marker-alt"></i></button>
          <div id="mapcegahkebakaran" class="rounded" style="min-height: 500px;background-color: #f5f5f5;"></div>
        </div>
      </div>
      <!-- Start: konten -->
      <div class="row konten" style="padding-right: 10%;padding-left: 10%;">
        <div class="col-sm-12 col-lg-6 offset-lg-3" style="margin-bottom: 20px;">
          <p style="color: #e2e2e2;">Petugas pemadam kebakaran dari berbagai wilayah di Bandung Raya berjibaku hingga
            kurang lebih 40 jam untuk memadamkan kebakaran di Pasar Kosambi. Kebakaran bermula pada Minggu, 19 Mei 2019
            sekitar pukul delapan malam dan baru dituntaskan pada Senin, 21 Mei 2019 sekitar pukul 12 siang.<br><br>
            Dampak dari kebakaran itu, setidaknya menghancurkan 172 kios dan mengakibatkan kerugian hingga Rp20 miliar.
            Kebakaran ini jadi satu yang paling sulit penuntasannya dari 528 kasus lainnya sepanjang 2018-2019 lalu.<br><br>
            Kepala Bidang Kesiapsiagaan Operasi Pemadam dan Penyelamatan Dinas Kebakaran dan Penanggulangan Bencana
            (Diskar PB) Kota Bandung, Yusuf Hidayat mengatakan, pencegahan kebakaran yang paling baik adalah
            kesiapsiagaan dan penanganan dini dari warga. “Untuk minimalisir harta benda dan jatuhnya korban,” ujar
            Yusuf yang ditemui pada Kamis, 19 Maret 2020 lalu.<br><br>
            Masyarakat bisa melakukan penanganan dini dengan memastikan sambungan listriknya aman serta membekali diri
            dengan kemampuan dasar pemadaman api sejak masih kecil sumbernya. Pada saat berbarengan, sebaiknya ada yang
            menghubungi call center Diskar PB Kota Bandung di 022-113 atau 022-7207113.
          </p>
          <div>
            <iframe src="https://flo.uri.sh/visualisation/2014224/embed"
              style="height: 500px; width: 100%; margin:20px 0 0 0; background-color: #525252; border: none;"></iframe>
            <p style="color: #e2e2e2; font-size:12px; font-style: italic; text-align: center;">Kasus kebakaran Kota
              Bandung tahun 2018-2019 (Olah data Tim Bandung Lautan Api)</p>
          </div>
          <p style="color: #e2e2e2;">
            Yusuf mengatakan, standar pelayanan minimal adalah merespon dan tiba di lokasi kejadian paling lambat 15
            menit. “Dari mulai menerima laporan, persiapan, berangkat, dan sampai (di lokasi), gelar selang di sana
            harus 15 menit. Kalau penanganan bisa lebih (waktunya),” ungkap Yusuf merujuk pada Peraturan Menteri Dalam
            Negeri no 114 tahun 2018 tentang Standar Teknis Pelayanan Dasar pada Standar Pelayanan Minimal Sub Urusan
            Kebakaran Daerah Kabupaten/Kota.<br><br>
            Guna memastikan kehadiran petugas di lokasi kejadian dalam waktu kurang dari 15 menit, Diskar PB Kota
            Bandung memiliki empat unit pelaksana teknis (UPT) di empat arah mata angin, selain kantor pusat di Jalan
            Sukabumi. “Unit yang paling dekat akan merespon lebih dulu, branwir dan petugas dari unit lain akan segera
            back-up,” ujar Yusuf.</p>
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
              <div class="d-inline-block" style="padding: 10px;"><img src="static/image/logo-github.png" width="32px">
              </div>
            </a>
            <a href="http://lautanapi.netlify.app/">
              <div class="d-inline-block" style="padding: 10px;"><img src="static/image/logo-bla.png" width="32px">
              </div>
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
              <p class="text-center"
                style="font-family: Roboto, sans-serif;font-weight: 400;font-size: 10px;color: #e2e2e2;"><a
                  href="https://creativecommons.org/licenses/by-nc/4.0/legalcode.id"
                  style="color:#b40b10; text-decoration: none; font-family: Roboto, sans-serif;font-weight: 400;font-size: 10px;">CC
                  BY-NC-SA 4.0</a> <br>DATA JOURNALISM
                HACKATHON 2020</p>
            </div>
            <!-- End: footer text -->
          </div>
        </div>
        <!-- End: footer-text -->
      </div>
      <!-- End: footer-wraper -->
    </div>
    <!-- End: wraper -->
    <a href="#cegah_kebakaran">
      <div class="totop rounded"><i class="fas  fa-arrow-up"></i></div>
    </a>
    <router-link to="/">
      <div class="tohome rounded"><i class="fas  fa-home"></i></div>
    </router-link>
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
        index_uptd: 0,
        res_jarak: 0,
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
            var wilayah = "";
            if (self.index_uptd == 0) {
              wilayah = "Kantor Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung";
            }
            else if (self.index_uptd == 1) {
              wilayah = "Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Barat";
            }
            else if (self.index_uptd == 2) {
              wilayah = "Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Timur";
            }
            else if (self.index_uptd == 3) {
              wilayah = "Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Utara";
            }
            else if (self.index_uptd == 4) {
              wilayah = "Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Selatan";
            }
            global.theMarker = L.marker(result.latlng, { icon: pin })
              .addTo(mymap)
              .bindPopup(
                "<p><h6>Lokasi saat ini:</h6> " + result.address.Match_addr + "<hr>Anda berada dekat dengan " + wilayah + ". Dengan jarak " + self.res_jarak.toFixed(2) + " Km" + ", Jika mobil pemadam kebakaran melaju dengan kecepatan 50 Km/h Pemadam kebakaran akan tiba dilokasi anda dalam waktu " + ((self.res_jarak / 50) * 60).toFixed(2) + " Menit</p>"
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
      global.mymap = L.map("mapcegahkebakaran").setView([-6.9174639, 107.6191228], 13);
      //map themes
      L.tileLayer.provider(map_themes).addTo(mymap);

      // geojson data hidran
      $.getJSON("static/data/map-uptd.json", function (data_uptd) {
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
          if (i == 0) {
            global.theMarker = L.marker(self.coords[i], { icon: pusat })
              .addTo(mymap)
              .bindPopup(
                "<p><h6>Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung</h6> Alamat: " + self.root_uptd[i] + "</p>"
              );
          }
          else if (i == 1) {
            global.theMarker = L.marker(self.coords[i], { icon: uptd })
              .addTo(mymap)
              .bindPopup(
                "<p><h6>Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Barat</h6> Alamat: " + self.root_uptd[i] + "</p>"
              );
          }
          else if (i == 2) {
            global.theMarker = L.marker(self.coords[i], { icon: uptd })
              .addTo(mymap)
              .bindPopup(
                "<p><h6>Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Timur</h6> Alamat: " + self.root_uptd[i] + "</p>"
              );
          }
          else if (i == 3) {
            global.theMarker = L.marker(self.coords[i], { icon: uptd })
              .addTo(mymap)
              .bindPopup(
                "<p><h6>Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Utara</h6> Alamat: " + self.root_uptd[i] + "</p>"
              );
          }
          else if (i == 4) {
            global.theMarker = L.marker(self.coords[i], { icon: uptd })
              .addTo(mymap)
              .bindPopup(
                "<p><h6>Dinas Kebakaran dan Penanggulangan Bencana Kota Bandung Wilayah Selatan</h6> Alamat: " + self.root_uptd[i] + "</p>"
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
  #mapcegahkebakaran {
    min-height: 400px;
    margin-top: 20px;
  }
</style>