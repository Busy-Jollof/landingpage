<template>
  <div>
    <about-section></about-section>
    <why-we-are-different-about-section></why-we-are-different-about-section>
  </div>
</template>

<script>
import AboutSection from "./PagesComponents/AboutUsPageComponents/AboutSection.vue";
import WhyWeAreDifferentAboutSection from "./PagesComponents/AboutUsPageComponents/WhyWeAreDifferentAboutSection.vue";

export default {
  name: "AboutUs",
  components: {
    AboutSection,
    WhyWeAreDifferentAboutSection,
  },
};
</script>
