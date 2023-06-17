<template>
  <div class="benefits-section-for-delivery-drivers">
    <h4 class="benefits-section-for-delivery-drivers__title">Benefits</h4>
    <p class="benefits-section-for-delivery-drivers__description">
      As the first-of-its-kind African-inspired online food ordering and
      delivery company, BusyJollof is at the forefront of an exciting and
      growing industry. By joining our team, you'll be part of a company
      breaking new ground and changing how people experience African cuisine.
    </p>
    <p class="benefits-section-for-delivery-drivers__description mb-0">
      So if you're looking for a challenging and rewarding job with a company
      making a real difference, reserve your spot as a delivery driver for
      BusyJollof today.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.benefits-section-for-delivery-drivers {
  padding: 5.3rem 4.3rem;
  background-color: $color-oxford-blue;
  border-radius: 0.7rem;
  margin: 4rem 0 5rem;
  &__title {
    font-size: 3rem;
    font-family: $font-secondary-medium;
    line-height: 3.4rem;
    margin-bottom: 2.7rem;
    color: $color-white;
    font-weight: 500;
    @include respond(phone-x-small) {
      font-size: 2.5rem;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    margin-bottom: 2.5rem;
    color: $color-white;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
}
</style>
