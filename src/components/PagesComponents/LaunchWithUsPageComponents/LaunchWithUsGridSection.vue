<template>
  <div class="launch-with-us-grid">
    <b-row cols="3">
      <b-col class="py-4" cols="12" sm="6" md="4" lg="4" xl="4">
        <div class="launch-with-us-card">
          <img
            src="@/assets/icons/game-icons_fruit-bowl.svg"
            alt="Game fruit bowl"
            class="launch-with-us-card__image"
          />
          <h2 class="launch-with-us-card__title">Everyone</h2>
          <p class="launch-with-us-card__description">
            Select this option if you are only interested in knowing when
            BusyJollof launches
          </p>
          <button
            class="launch-with-us-card__btn"
            @click="openServices('/services-for-everyone')"
          >
            Reserve now
          </button>
        </div>
      </b-col>
      <b-col class="py-4" cols="12" sm="6" md="4" lg="4" xl="4"
        ><div class="launch-with-us-card m-auto">
          <img
            src="@/assets/icons/mingcute_location-3-fill.svg"
            alt="Game fruit bowl"
            class="launch-with-us-card__image"
          />
          <h2 class="launch-with-us-card__title">
            Delivery <br />
            Driver
          </h2>
          <p class="launch-with-us-card__description">
            Select this option if you are a food delivery driver and would love
            to deliver meals for us
          </p>
          <button
            class="launch-with-us-card__btn"
            @click="openServices('/services-delivery-drivers')"
          >
            Reserve now
          </button>
        </div></b-col
      >
      <b-col class="py-4" cols="12" sm="6" md="4" lg="4" xl="4"
        ><div class="launch-with-us-card ml-auto">
          <img
            src="@/assets/icons/ion_restaurant-sharp.svg"
            alt="Game fruit bowl"
            class="launch-with-us-card__image"
          />
          <h2 class="launch-with-us-card__title">
            Restaurant <br />
            Owner
          </h2>
          <p class="launch-with-us-card__description">
            Select this option if you already have a restaurant or if you cook
            from your home
          </p>
          <button
            class="launch-with-us-card__btn"
            @click="openServices('/services-restaurant-owners')"
          >
            Reserve now
          </button>
        </div></b-col
      >
    </b-row>
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
.launch-with-us-grid {
  margin-top: 2.7rem;
  .launch-with-us-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background-color: #ddf2e4;
    padding: 3.4rem 6rem;
    max-width: 34.6rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    width: auto;
    border-radius: 0.7rem;
    @include respond(tab-port) {
      margin: auto !important;
      max-width: 100%;
    }
    @include respond(phone-x-small) {
      padding: 3.4rem 5rem;
    }
    &__image {
      width: 6rem;
      height: auto;
      margin-bottom: 0.8rem;
    }
    &__title {
      font-size: 2.4rem;
      font-family: $font-primary-semi-bold;
      line-height: 2.4rem;
      margin-bottom: 2rem;
      text-align: center;
      @include respond(phone-x-small) {
        font-size: 2.5rem;
        line-height: 2.8rem;
      }
    }
    &__description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.1rem;
      margin-bottom: 1rem;
      text-align: center;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
        margin-bottom: 2rem;
      }
    }
    &__btn {
      width: 22.7rem;
      height: 5rem;
      border: none;
      outline: none;
      display: block;
      font-size: 1.6rem;
      font-family: $font-primary-medium;
      background-color: $color-primary;
      color: $color-white;
      border-radius: 0.7rem;
      filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        height: 6.5rem;
      }
    }
  }
}
</style>
