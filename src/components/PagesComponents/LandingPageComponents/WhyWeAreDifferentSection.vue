<template>
  <div class="different-section my-container">
    <b-row cols="2">
      <b-col
        cols="6"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        class="different-section__left"
      >
        <img
          src="@/assets/images/person-working-collaboratively-online.png"
          alt="Person Working"
        />
      </b-col>
      <b-col
        cols="6"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        class="different-section__right"
      >
        <div class="different-section__right--container">
          <h2 class="title">Why we are different</h2>
          <p class="description">
            Unlike the other food delivery services, BusyJollof is bringing a
            new twist to the game with its "search by meal" approach, focusing
            more on elaborated categories of African-inspired meals you will
            never find anywhere.
          </p>
          <button class="btn" @click="learnAbout('/launch-with-us')">Learn more</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("navigation", ["setRoute"]),
    learnAbout(routePath) {
      this.$router
        .push(routePath)
        .then(() => {
          this.setRoute(routePath);
          window.scrollTo(0, 0);
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.different-section {
  padding: 0 10rem;
  margin: 11.1rem auto !important;
  @include respond(tab-land) {
    padding: 3.4rem 8rem;
  }
  @include respond(laptop-small) {
    padding: 3.4rem 4rem;
  }
  @include respond(tab-port) {
    padding: 0;
    margin: 0 !important;
  }

  &__left {
    position: relative;
    width: 40%;
    order: 1;
    z-index: 2;
    @include respond(tab-port) {
      width: 70%;
      order: 2;
      margin: auto;
      display: block;
      position: inherit;
      padding: 0 6rem;
    }
    @include respond(phone-x-small) {
      width: 100%;
      padding: 0 4rem;
    }
    img {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      width: 100%;
      height: auto;
      object-fit: contain;
      @include respond(tab-port) {
        position: inherit;
        transform: translateY(-9%);
      }
    }
  }
  &__right {
    width: 60%;
    background: radial-gradient(
      12.31% 45.25% at 53.44% 54.75%,
      rgba(254, 130, 0, 0.2) 7.81%,
      rgba(2, 152, 55, 0.138) 100%
    );
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    padding: 7rem 0;
    order: 2;
    @include respond(laptop-small) {
      padding: 4rem 0;
    }
    @include respond(tab-port) {
      width: 100%;
      order: 1;
      padding: 0 !important;
    }
    &--container {
      width: 43.2rem;
      margin: auto;
      @include respond(tab-port) {
        width: 100%;
        padding: 6rem 10rem 10rem 6rem;
      }
      @include respond(phone-x-small) {
        padding: 6rem 4rem 10rem;
      }
      .title {
        font-size: 2.3rem;
        font-family: $font-primary-semi-bold;
        line-height: 3.4rem;
        margin: 0;
        @include respond(phone-x-small) {
          font-size: 2.9rem;
        }
      }
      .description {
        font-size: 1.6rem;
        font-family: $font-primary;
        line-height: 2.2rem;
        //margin: 0.9rem auto 2rem;
        //padding-bottom: -6rem;
        margin-top: 0.6rem;
        margin-bottom: 1.9rem;
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 2.6rem;
        }
      }
      .btn {
        width: 17.7rem;
        height: 5rem;
        border: none;
        outline: none;
        display: block;
        font-size: 1.6rem;
        font-family: $font-primary-medium;
        color: $color-white;
        border-radius: 0.7rem;
        background-color: $color-oxford-blue;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          height: 6.5rem;
        }
      }
    }
  }
}
</style>
