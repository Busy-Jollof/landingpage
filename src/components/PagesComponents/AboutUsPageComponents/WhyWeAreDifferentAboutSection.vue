<template>
  <div class="different-about-section my-container">
    <div class="different-about-section__section">
      <h1 class="different-about-section__section--title">
        Why we are different
      </h1>
      <p class="different-about-section__section--description">
        Find out what sets us apart from every other food delivery company
      </p>
      <button class="different-about-section__section--btn">Learn more</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.different-about-section {
  padding: 4rem 10rem 0;
  margin-bottom: 7.5rem;
  @include respond(tab-land) {
    padding: 4rem 8rem 0;
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
  &__section {
    background-color: #ddf2e4;
    padding: 2.9rem 4rem;
    @include respond(phone-x-small) {
      padding: 2.9rem 2rem;
    }
    &--title {
      font-size: 2.5rem;
      font-family: $font-primary-medium;
      line-height: 3.4rem;
      margin-bottom: 1.2rem;
      text-align: center;
      @include respond(tab-port) {
        font-family: $font-primary-semi-bold;
      }
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      text-align: center;
      margin-bottom: 0;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
    &--btn {
      width: 22.7rem;
      height: 5rem;
      border: none;
      outline: none;
      display: block;
      margin: 2.7rem auto 0;
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
}
</style>
