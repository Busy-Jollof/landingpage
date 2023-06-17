<template>
  <div class="know-more-section">
    <h2 class="know-more-section__title">Want to know more?</h2>
    <p class="know-more-section__description">
      If you want to know more about why ask to reserve a spot, please visit our
      frequently asked question page for answers.
    </p>
    <button 
    class="know-more-section__btn"
    @click="openServices('/faq')"
    >Learn more</button>
  </div>
</template>

<script>
export default {
  methods: {
    openServices(routeName) {
      this.$router.push(routeName);
      window.scrollTo(0,0); 
    },
  },
};
</script>

<style lang="scss" scoped>
.know-more-section {
  margin-top: 18.5rem;
  &__title {
    font-size: 3rem;
    font-family: $font-secondary-medium;
    line-height: 3.4rem;
    margin-bottom: 0;
    font-weight: 500;
    @include respond(phone-x-small) {
      font-size: 2.5rem;
      font-family: $font-primary-semi-bold;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    margin: 0.5rem 0 2.1rem;
    max-width: 77rem;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
  &__btn {
    width: 22.7rem;
    height: 5rem;
    border: none;
    outline: none;
    margin: 1.2rem 0 0;
    font-size: 1.6rem;
    font-family: $font-primary-medium;
    background-color: $color-primary;
    color: $color-white;
    border-radius: 0.7rem;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      height: 6.5rem;
    }
  }
}
</style>
