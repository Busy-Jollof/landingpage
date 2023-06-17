<template>
  <div class="restaurant-owner-about-services my-container">
    <div class="restaurant-owner-about-services__about">
      <h1 class="restaurant-owner-about-services__about--title">
        For restaurant owners
      </h1>
      <p class="restaurant-owner-about-services__about--description">
        We are delighted you have chosen to reserve a spot with us! As the
        first-of-its-kind African food ordering and delivery platform in the US,
        Our primary mission is to promote and celebrate Africa's rich and
        diverse cuisine.
      </p>
      <p class="restaurant-owner-about-services__about--description">
        Joining our platform will give your restaurant unique opportunities to
        expand your customer base and increase revenue. By partnering with
        BusyJollof, you can reach a wider audience of food enthusiasts eager to
        discover and explore the flavors of African cuisine.
      </p>
    </div>
    <benefits-section-for-restaurant-owners></benefits-section-for-restaurant-owners>
    <for-restaurant-owners-form></for-restaurant-owners-form>
    <try-our-services-form></try-our-services-form>
  </div>
</template>

<script>
import BenefitsSectionForRestaurantOwners from "./BenefitsSectionForRestaurantOwners.vue";
import ForRestaurantOwnersForm from "./ForRestaurantOwnersForm.vue";
import TryOurServicesForm from "../ServicesForEveryoneComponents/KnowMoreSection.vue";
export default {
  components: {
    BenefitsSectionForRestaurantOwners,
    ForRestaurantOwnersForm,
    TryOurServicesForm,
  },
};
</script>

<style lang="scss" scoped>
.restaurant-owner-about-services {
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
  &__about {
    &--title {
      font-size: 3.5rem;
      font-family: $font-primary-semi-bold;
      line-height: 6.8rem;
      margin-bottom: 0;
      @include respond(phone-x-small) {
        font-size: 3.5rem;
      }
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      margin: 2rem 0 3rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
  }
}
</style>
