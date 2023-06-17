<template>
  <div>
    <hero-section></hero-section>
    <why-we-are-different-section></why-we-are-different-section>
    <launch-section></launch-section>
    <join-community-section></join-community-section>
  </div>
</template>

<script>
import HeroSection from "./PagesComponents/LandingPageComponents/HeroSection.vue";
import WhyWeAreDifferentSection from "./PagesComponents/LandingPageComponents/WhyWeAreDifferentSection.vue";
import LaunchSection from "./PagesComponents/LandingPageComponents/LaunchSection.vue";
import JoinCommunitySection from "./PagesComponents/LandingPageComponents/JoinCommunitySection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    WhyWeAreDifferentSection,
    LaunchSection,
    JoinCommunitySection,
  },
};
</script>
