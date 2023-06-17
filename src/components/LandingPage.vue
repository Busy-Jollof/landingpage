<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Layout/Navbar.vue";
import Footer from "./Layout/Footer.vue";

export default {
  name: "LandingPage",
  components: {
    Navbar,
    Footer,
  },
};
</script>
