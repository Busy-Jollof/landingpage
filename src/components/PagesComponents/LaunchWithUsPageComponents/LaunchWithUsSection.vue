<template>
  <div class="launch-with-us-container my-container">
    <div class="launch-with-us-container__launch-with-us">
      <div class="launch-with-us-container__launch-with-us--title">
        Launch with us
        <img src="@/assets/images/amico.png" alt="Amico" />
      </div>
      <p class="launch-with-us-container__launch-with-us--description">
        This section is dedicated to anyone interested in partnering with any of
        BusyJollof’s services or anyone who want’s to be part of our community.
        There is always something on the table for everyone. If you are a
        restaurant owner who makes African inspired meals, someone who is
        interested in delivering meals for BusyJollof, please fill the form
        below to reserve your spot for when we launch.
      </p>
      <h4 class="launch-with-us-container__launch-with-us--sub-title">
        Select an option
      </h4>
      <p class="launch-with-us-container__launch-with-us--description mt-0">
        Use the options below to select how you would like to reserve your spot
        as
      </p>
      <launch-with-us-grid-section></launch-with-us-grid-section>
    </div>
  </div>
</template>

<script>
import LaunchWithUsGridSection from "./LaunchWithUsGridSection.vue";
export default {
  components: {
    LaunchWithUsGridSection,
  },
};
</script>

<style lang="scss" scoped>
.launch-with-us-container {
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
  &__launch-with-us {
    &--title {
      position: relative;
      font-size: 3.5rem;
      font-family: $font-primary-semi-bold;
      line-height: 6.8rem;
      margin-bottom: 0;
      width: fit-content;
      img {
        position: absolute;
        width: 12.2rem;
        height: 8.9rem;
        object-fit: contain;
        right: -6.5rem;
        bottom: 1.5rem;
        z-index: -1;
        @include respond(phone-x-small) {
          right: -8.5rem;
          bottom: 3.5rem;
        }
      }
      @include respond(phone-x-small) {
        font-size: 3.5rem;
      }
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      margin: 2rem 0 2.9rem;
      max-width: 114.7rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
        margin: 3rem 0 4rem;
      }
    }
    &--sub-title {
      font-size: 3rem;
      font-family: $font-secondary-medium;
      line-height: 3.4rem;
      margin-bottom: 2rem;
      margin-top: 2.9rem;
      @include respond(phone-x-small) {
        margin-top: 5rem;
      }
    }
  }
}
</style>
