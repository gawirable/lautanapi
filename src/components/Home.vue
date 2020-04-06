<template>
  <div class="home">
    <!--<img src="../assets/logo.png">-->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt />
        {{ msg }}
      </a>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col"></div>
      </div>
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