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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>