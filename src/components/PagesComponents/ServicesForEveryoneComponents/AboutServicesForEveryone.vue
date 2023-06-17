<template>
  <div class="about-services my-container">
    <div class="about-services__about">
      <h1 class="about-services__about--title">For everyone</h1>
      <p class="about-services__about--description">
        BusyJollof is a revolutionary African-inspired online food ordering and
        delivery company that is changing how people enjoy authentic African
        cuisine. With BusyJollof, customers can access a wide range of delicious
        and nutritious meals from various African countries prepared by talented
        chefs who deeply understand African cuisine.
      </p>
      <p class="about-services__about--description">
        As a first-of-its-kind company, BusyJollof is committed to providing
        customers with the best possible service and ensuring their meals are
        delivered fresh and hot to their doorstep. However, due to the high
        demand for our services, we strongly advise our potential customers to
        reserve a spot to be among the first ones to try our services when we
        launch.
      </p>
    </div>
    <services-for-everyone-table></services-for-everyone-table>
    <try-our-services-form></try-our-services-form>
    <know-more-section></know-more-section>
  </div>
</template>

<script>
import ServicesForEveryoneTable from "./ServicesForEveryoneTable.vue";
import TryOurServicesForm from "./TryOurServicesForm.vue";
import KnowMoreSection from "./KnowMoreSection.vue";
export default {
  components: {
    ServicesForEveryoneTable,
    TryOurServicesForm,
    KnowMoreSection,
  },
};
</script>

<style lang="scss" scoped>
.about-services {
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
