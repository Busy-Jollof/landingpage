<template>
  <div class="services-for-delivery-drive my-container">
    <div class="services-for-delivery-drive__about">
      <h1 class="services-for-delivery-drive__about--title">
        For delivery drivers
      </h1>
      <p class="services-for-delivery-drive__about--description">
        Welcome to BusyJollof, a first-of-its-kind African-inspired online food
        ordering and delivery company. Our mission is to bring the flavors of
        Africa to your doorstep, and we're looking for talented and dedicated
        delivery drivers to help us achieve this goal.
      </p>
      <p class="services-for-delivery-drive__about--description">
        As a delivery driver for BusyJollof, you'll have the opportunity to work
        with a dynamic and fast-growing company that's changing the way people
        think about African cuisine. Our online platform allows customers to
        order their favorite African dishes from a wide range of restaurants and
        food vendors, and our drivers are responsible for ensuring that these
        orders are delivered promptly and with the highest level of customer
        service.
      </p>
    </div>
    <benefits-section-for-delivery-drivers></benefits-section-for-delivery-drivers>
    <services-for-delivery-drivers-form></services-for-delivery-drivers-form>
    <try-our-services-form></try-our-services-form>
  </div>
</template>

<script>
import ServicesForDeliveryDriversForm from "./ServicesForDeliveryDriversForm.vue";
import BenefitsSectionForDeliveryDrivers from "./BenefitsSectionForDeliveryDrivers.vue";
import TryOurServicesForm from "../ServicesForEveryoneComponents/KnowMoreSection.vue";
export default {
  components: {
    BenefitsSectionForDeliveryDrivers,
    ServicesForDeliveryDriversForm,
    TryOurServicesForm,
  },
};
</script>

<style lang="scss" scoped>
.services-for-delivery-drive {
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
