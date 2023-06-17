<template>
  <div class="benefits-section-forrestaurant-owners">
    <h4 class="benefits-section-forrestaurant-owners__title">Benefits</h4>
    <p class="benefits-section-forrestaurant-owners__description">
      Our platform also offers user-friendly tools and resources to help
      streamline your operations and improve customer service. From online
      ordering and delivery management to marketing and promotional support, we
      are committed to providing our partners with the tools and resources they
      need to succeed.
    </p>
    <p class="benefits-section-forrestaurant-owners__description mb-0">
      Partnering with BusyJollof is about more than just increasing your
      business, it's about becoming part of a vibrant and supportive community
      of African food lovers. We look forward to working with you and showcasing
      the best African cuisine to the world.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.benefits-section-forrestaurant-owners {
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
