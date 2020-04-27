<template>
  <div class="data" id="data">
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
                    <h1 class="text-center" style="font-family: Poppins, sans-serif;font-weight: 800;color: #e2e2e2;">BANDUNG LAUTAN <span style="color: #b40b10;">API</span></h1>
                </div>
                <!-- End: header-text -->
                <!-- Start: sub-header -->
                <div>
                    <h4 class="text-center" style="font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2;">Seberapa dekat kita dengan kebakaran?</h4>
                </div>
                <!-- End: sub-header -->
            </div>
        </div>
        <!-- End: header-text -->
        <div class="row" style="margin-bottom: 50px;">
            <div class="col-10 col-lg-10 offset-1 offset-lg-1">
                <div id="mapdata" class="rounded" style="min-height: 500px;background-color: #f5f5f5;"></div>
            </div>
        </div>
        <!-- Start: konten -->
        <div class="row konten" style="padding-right: 10%;padding-left: 10%;">
            <div class="col-sm-12 col-lg-6 offset-lg-3" style="margin-bottom: 20px;">
                <p style="color: #e2e2e2;">Tahukah anda, rata-rata kebakaran di Kota Bandung selama dua tahun terakhir adalah 5 kasus setiap pekannya.<br><br>Dinas Kebakaran dan Penanggulangan Bencana (Diskar PB) Kota Bandung mencatat selama tahun 2018 dan 2019 ada 529 kasus kebakaran.
                    Nilai kerugian yang sudah dihitung, akibat kebakaran selama dua tahun itu mencapai setidaknya Rp82,6 miliar.<br><br>Kepala Bidang Kesiapsiagaan Operasi Pemadam dan Penyelamatan Diskar PB Kota Bandung, Yusuf Hidayat mengatakan, salah
                    satu tantangan menangani kebakaran di Kota Bandung adalah kepadatan rumah serta kemacetan. Selain itu, kurang lebarnya jalan juga membuat mobil pemadam kesulitan mencapai lokasi kebakaran. “Belum lagi kalau ada jalan yang diportal.
                    Sarannya, kunci portal itu disimpan di pos yang mudah diakses,” ungkap Yusuf.<br><br>Setidaknya tiga orang meninggal dunia dan 25 orang lainnya luka-luka dalam 258 kasus kebakaran pada tahun 2018. Sementara pada tahun 2019, tercatat
                    ada 271 kasus kebakaran dengan tujuh korban meninggal dunia dan 82 orang lainnya luka-luka.<br><br>Korsleting listrik (termasuk AC, aki mobil, serta pengapian mobil) menjadi penyebab kebakaran tertinggi dalam periode 2018-2019 dengan
                    122 kasus.<br><br>Data Diskar PB Kota Bandung tahun 2018-2019 memperlihatkan masih ada 236 dari 529 kasus kebakaran yang belum diketahui penyebabnya. Mereka mengidentifikasinya sebagai kasus yang masih dalam penyelidikan. “Kami serahkan
                    ke pihak kepolisian,” ungkap Yusuf.<br><br>Selain itu, ada 33 penyebab lain kebakaran seperti korsleting listrik, pembakaran sampah, hingga masalah pada sambungan gas.<br><br>Dalam upaya memadamkan api saat kebakaran, Diskar PB Kota
                    Bandung hanya memanfaatkan tiga dari setidaknya 94 titik hidran yang kami temukan seperti sudah ditandai dalam peta. “Hidran yang sering kita pakai itu di Cikapayang depan gereja, (Jalan) Supratman depan pom bensin, sama di Kordon
                    (Buah Batu),” kata Yusuf yang mengaku tidak tahu menahu jumlah total hidran di wilayah Bandung.<br><br>Hidran adalah alat pemadam kebakaran yang dipasang permanen. Airnya berasal dari sambungan pipa yang dikelola Perusahaan Daerah
                    Air Minum (PDAM) Tirtawening. Yusuf dan kawan-kawannya memanfaatkan hidran untuk mengisi mobil tangki pemadam yang berkapasitas 4 ribu-8 ribu liter. “Paling lama lima menit harus terisi karena ada standar pelayanan minimal. Lebih cepat
                    lebih bagus,” kata Yusuf soal pilihan timnya mencari titik hidran guna mengisi mobil-mobilnya.<br><br>Sebagian besar hidran yang terpasang itu setelah dicek, debit atau tekanan airnya kurang, butuh penyambungan khusus agar bisa dipasang
                    ke selang mobil, atau sama sekali sudah hilang dan tidak bisa disambungkan selang. “Ini sumbernya air baku makanya kita berkoordinasi dengan PDAM,” tambah Yusuf.<br><br>SNI 03-1735-2000 mensyaratkan hidran di halaman memiliki kemampuan
                    memasok air 2,400 liter per menit dan bisa mengalirkan air minimal selama 45 menit. Ketentuan ini berlaku buat bangunan atau gedung dan jadi syarat untuk memperoleh izin pembangunan.<br><br>Komandan Regu Rescue Batalyon III Diskar
                    PB Kota Bandung, Totoy Yuhasmana mengatakan, standar waktu pengisian tangki mobil kapasitas 4 ribu liter adalah tiga menit hingga lima menit pada hidran dengan tekanan 3,6 bar. “Semakin cepat terisi, bisa semakin cepat dukung tim yang
                    lagi memadamkan api,” imbuh Totoy.<br><br>PDAM Tirtawening melansir ada 61 hidran di Kota Bandung yang tersebar di wilayah utara (24 titik), timur (26 titik), dan barat (11 titik). Mayoritas dilaporkan dalam kondisi baik. Penelusuran
                    kami, jumlah hidran itu jauh lebih banyak. Sebagian dari hidran malah tidak bisa diakses karena ada yang terbenam lantaran penebalan trotoar atau sudah tidak utuh perangkatnya.<br><br>“Makanya masyarakat harus melakukan pencegahan.
                    Menyediakan alat pemadam ringan serta ada penyuluhan dari pengurus dan aparat kewilayahan. Bisa juga dengan menyediakan karung basah atau pasir dan mencari sumber-sumber air yang terdekat dengan wilayahnya,” kata Totoy.<br></p>
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
    <a href="#data">
      <div class="totop rounded"><i class="fas  fa-arrow-up"></i></div>
    </a>
    <router-link to="/">
      <div class="tohome rounded"><i class="fas  fa-home"></i></div>
    </router-link>
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
    created: function () {
    }, //end created
    mounted: function () {
      var self = this;
      //center & zoom map
      global.mymap = L.map("mapdata").setView([-6.9174639, 107.6191228], 15);
      //map themes
      L.tileLayer.provider(map_themes).addTo(mymap);

      //geojson data hidran
      $.getJSON("static/data/map-hidran.json", function (data_hidran) {
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
          if (i == 22 || i == 28 || i == 93) {
            global.theMarker = L.marker(self.coords[i], { icon: hidranaktif })
              .addTo(mymap)
              .bindPopup(
                "<p>Hidran " + i + ", Alamat: " + self.root_hidran[i] + "</p>"
              );
          }
          else {
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

</style>