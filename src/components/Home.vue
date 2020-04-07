<template>
  <div class="home">
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
  mounted: function() {
    var db = new alasql.Database();
    db.exec("CREATE TABLE example (a INT, b INT)");
    db.tables.example.data = [
      { a: 5, b: 6 },
      { a: 3, b: 4 }
    ];
    var res = db.exec("SELECT avg(b) FROM example");
    //console.log(res);
    // alasql
    //   .promise(
    //     'SELECT * FROM CSV("static/sample.csv", {headers:true}) where kecamatan="Texas"'
    //   )
    //   .then(function(data) {
    //     console.log(data);
    //   })
    //   .catch(function(err) {
    //     console.log("Error:", err);
    //   });
    alasql
      .promise(
        'SELECT `Kelurahan` FROM CSV("static/detail-2018.csv", {headers:true}) where Kecamatan="Ujungberung"'
      )
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log("Error:", err);
      });
  }, //end mounted
  updated: function() {} //end updated
}; //end export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>