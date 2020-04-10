<template>
  <div class="home">
    <!--<img src="../assets/logo.png">-->
    <!-- Start: Navigation Dark Clean -->
    <nav class="navbar navbar-dark navbar-expand-md bg-dark navigation-clean">
        <div class="container"><a class="navbar-brand" href="#">Bandung Lautan Api</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><router-link to="/" class="nav-link active">Beranda</router-link> </li>
                    <li class="nav-item" role="presentation"><router-link to="/data" class="nav-link ">Data</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/cek-resiko" class="nav-link ">Cek Resiko</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/cegah-kebakaran" class="nav-link ">Cegah Kebakaran</router-link></li>
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
  name: "Home",
  data() {
    return {
      msg: "Lautan Api - Home"
    };
  },
  methods: {}, //end methode
  created: function() {}, //end created
  mounted: function() {}, //end mounted
  updated: function() {} //end updated
}; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>