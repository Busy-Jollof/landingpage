<template>
  <div class="timeline-section my-container">
    <h1 class="timeline-section__title">Our timeline</h1>
    <p class="timeline-section__description">
      As we strive to bring you the best experience when you place an order with
      us, we believe it will be a great idea to carry everyone along on every
      stage of our progress. Because of this, we decided to create a live
      timeline for everyone to follow. However, to get more detail and updates
      about each stage of our progress or be a part of our beta testing, we
      encourage you to sign up here.
    </p>
    <time-line-slider></time-line-slider>
  </div>
</template>
<script>
import TimeLineSlider from "./TimeLineSlider.vue";
export default {
  components: {
    TimeLineSlider,
  },
};
</script>

<style lang="scss" scoped>
.timeline-section {
  padding: 4rem 10rem;
  margin: 6rem auto;
  @include respond(tab-land) {
    padding: 4rem 8rem;
  }
  @include respond(laptop-small) {
    padding: 0 4rem;
  }
  @include respond(tab-port) {
    padding: 0 6rem;
  }
  @include respond(phone-x-small) {
    padding: 0 4rem;
  }
  &__title {
    font-size: 3.5rem;
    font-family: $font-primary-semi-bold;
    line-height: 6.8rem;
    margin-bottom: 0;
    color: $color-oxford-blue;
    @include respond(phone-x-small) {
      font-size: 3.5rem;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    margin: 1.8rem 0;
    //max-width: 114rem;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
}
</style>
