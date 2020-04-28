<template>
    <div class="home" id="home">
        <!-- Start: wraper -->
        <div class="container-fluid wraper"
            style="padding-top: 50px;background-color: #222222;padding-right: 0px;padding-left: 0px;">
            <!-- Start: header-logo -->
            <div class="row header">
                <div class="col d-flex d-lg-flex justify-content-center justify-content-lg-center">
                    <!-- Start: logo bla -->
                    <div id="logo-header" style="margin-bottom: 20px;"><img src="static/image/logo-bla.png"
                            width="200px"></div>
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
                            style="font-family: Poppins, sans-serif;font-weight: 800;color: #e2e2e2; padding:0 10% 0 10%;">
                            BANDUNG LAUTAN <span style="color: #b40b10;">API</span></h1>
                    </div>
                    <!-- End: header-text -->
                    <!-- Start: sub-header -->
                    <div>
                        <h4 class="text-center"
                            style="font-family: Roboto, sans-serif;font-weight: 400;color: #e2e2e2;">Seberapa dekat kita
                            dengan kebakaran?</h4>
                    </div>
                    <!-- End: sub-header -->
                </div>
            </div>
            <!-- End: header-text -->
            <!-- Start: konten -->
            <div class="row konten" style="padding-right: 10%;padding-left: 10%;">
                <div class="col-sm-12 col-lg-4" style="margin-bottom: 20px;">
                    <router-link to="/data">
                        <div class="card border-dark nav-menu"><img class="card-img w-100 d-block"
                                src="static/image/bg-01.png" style="filter: saturate(0%);">
                            <div class="card-img-overlay">
                                <h4 class="text-center"
                                    style="font-family: Poppins, sans-serif;font-weight: 700;color: #b40b10;">DATA</h4>
                                <p class="text-center"
                                    style="font-family: Roboto, sans-serif;font-weight: 400;color: #ffffff; font-size:14px;">
                                    Dalam 2 tahun terakhir, ada 5 kebakaran setiap pekannya</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-lg-4" style="margin-bottom: 20px;">
                    <router-link to="/cek-resiko">
                        <div class="card border-dark nav-menu"><img class="card-img w-100 d-block"
                                src="static/image/bg-02.png" style="filter: saturate(0%);">
                            <div class="card-img-overlay">
                                <h4 class="text-center"
                                    style="font-family: Poppins, sans-serif;font-weight: 700;color: #b40b10;">CEK RISIKO
                                </h4>
                                <p class="text-center"
                                    style="font-family: Roboto, sans-serif;font-weight: 400;color: #ffffff; font-size:14px;">
                                    Dari 94 hidran, hanya 3 yang terpakai</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <router-link to="/cegah-kebakaran">
                        <div class="card border-dark nav-menu" style="margin-bottom: 20px;"><img
                                class="card-img w-100 d-block" src="static/image/bg-03.png"
                                style="filter: saturate(0%);">
                            <div class="card-img-overlay">
                                <h4 class="text-center"
                                    style="font-family: Poppins, sans-serif;font-weight: 700;color: #b40b10;">CEGAH
                                    KEBAKARAN</h4>
                                <p class="text-center"
                                    style="font-family: Roboto, sans-serif;font-weight: 400;color: #ffffff; font-size:14px;">
                                    15 menit yang menentukan</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- End: konten -->
            <!-- tim -->
            <div class="row" style="padding-right: 10%;padding-left: 10%; margin:50px 0 0 0;">
                <div class="col-12">
                    <div>
                        <h6 class="text-center"
                            style="font-family: Poppins, sans-serif;font-weight: 800;color: #e2e2e2;">TIM BANDUNG LAUTAN
                            <span style="color: #b40b10;">API</span></h6>
                    </div>
                    <div>
                        <p class="text-center" style="color: #e2e2e2;font-size: 12px;">
                            Jurnalis:<br /><a href="mailto:colenak@yahoo.com" style="color: #b40b10; text-decoration: none;">Adi Marsiela</a><br />
                            Desainer Grafis:<br /><a href="mailto:azizdarma@gmail.com" style="color: #b40b10; text-decoration: none;">Muhammad Aziz Dharmawan</a><br />
                            App Developer:<br /><a href="mailto:wirdan@rawstudio.id" style="color: #b40b10; text-decoration: none;">Wirdan Ardi Rukmana</a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- end: tim -->
            <!-- Start: footer-wraper -->
            <div style="margin-top: 50px;background-color: #1a1a1a;width: auto;">
                <!-- Start: footer -->
                <div class="row footer" style="padding-top: 10px;">
                    <!-- Start: logo -->
                    <div class="col d-flex d-lg-flex justify-content-center justify-content-lg-center">
                        <a class="my-auto" href="https://idjnetwork.org/" target="_blank">
                            <div style="padding: 10px;"><img src="static/image/logo-idjn.png" width="32px"></div>
                        </a>
                        <a href="https://github.com/gawirable/lautanapi" target="_blank">
                            <div class="d-inline-block" style="padding: 10px;"><img src="static/image/logo-github.png"
                                    width="32px"></div>
                        </a>
                        <a href="https://lautanapi.netlify.app/">
                            <div class="d-inline-block" style="padding: 10px;"><img src="static/image/logo-bla.png"
                                    width="32px"></div>
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
                                style="font-family: Roboto, sans-serif;font-weight: 400;font-size: 10px;color: #e2e2e2;">
                                <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode.id"
                                    style="color:#b40b10; text-decoration: none; font-family: Roboto, sans-serif;font-weight: 400;font-size: 10px;">CC
                                    BY-NC-SA 4.0</a> <br>DATA JOURNALISM HACKATHON 2020</p>
                        </div>
                        <!-- End: footer text -->
                    </div>
                </div>
                <!-- End: footer-text -->
            </div>
            <!-- End: footer-wraper -->
        </div>
        <!-- End: wraper -->
        <a href="#home">
            <div class="totop rounded"><i class="fas  fa-arrow-up"></i></div>
          </a>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                msg: "Lautan Api - Home"
            };
        },
        methods: {}, //end methode
        created: function () { }, //end created
        mounted: function () { }, //end mounted
        updated: function () { } //end updated
    }; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>