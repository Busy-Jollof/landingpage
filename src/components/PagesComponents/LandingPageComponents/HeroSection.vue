<template>
  <div class="hero-section my-container">
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2" cols-xl="2">
      <b-col class="p-0">
        <div class="content-section">
          <div class="content-section__header">
            <img src="@/assets/icons/check-logo.svg" alt="Right Logo" />
            <h4>The future for online</h4>
          </div>
          <div class="content-section__body">
            <h2>African food</h2>
            <h4>Ordering <span>&</span> delivery</h4>
            <h5>is coming to <span>a location near you!</span></h5>
            <p>
              BusyJollof is a new online food ordering and delivery service and
              the first to debut in the US. We are on a mission to bring you a
              continuous supply of authentic African-inspired meals from a local
              chef or a restaurant to your doorstep.
            </p>
          </div>
          <div class="content-section__footer">
            <button @click="openPage('/about')">Learn more</button>
            <button @click="openPage('/launch-with-us')">Reserve a spot</button>
          </div>
        </div>
      </b-col>
      <b-col class="image-section p-0"> </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("navigation", ["setRoute"]),
    openPage(routePath) {
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
.hero-section {
  padding: 0 11rem;
  @include respond(tab-land) {
    padding: 3.4rem 8rem;
  }
  @include respond(laptop-small) {
    padding: 3.4rem 4rem;
  }
  @include respond(tab-port) {
    padding: 0;
  }
  .row {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.7rem;
  }

  .content-section {
    padding: 12rem 8.4rem;
    background-color: $color-oxford-blue;
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    height: 100%;
    position: relative;
    z-index: 2;
    width: 100%;
    @include respond(laptop-large) {
      min-width: 68.7rem;
    }
    @include respond(laptop-medium) {
      min-width: inherit;
    }
    @include respond(tab-land) {
      padding: 12rem 6rem;
    }
    @include respond(tab-port) {
      padding: 12rem 6rem;
    }
    @include respond(phone-x-small) {
      padding: 12rem 4rem;
    }
    &__header {
      display: flex;
      align-items: center;
      @include respond(phone-x-small) {
        margin-bottom: 1rem;
      }
      img {
        width: 3rem;
        height: 3rem;
      }
      h4 {
        font-size: 1.6rem;
        font-family: $font-primary-medium;
        margin-bottom: 0;
        color: $color-white;
        margin-left: 1.4rem;
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 2.6rem;
        }
      }
    }
    &__body {
      h2 {
        font-size: 6.5rem;
        font-family: $font-secondary-bold;
        margin-bottom: 0;
        color: $color-white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        line-height: 7.4rem;
      }
      h4 {
        font-size: 3.2rem;
        font-family: $font-primary-semi-bold;
        margin-bottom: 0;
        color: $color-white;
        margin-top: 0.6rem;
        line-height: 4rem;
        span {
          color: rgba(2, 152, 55, 0.95);
        }
      }
      h5 {
        font-size: 2rem;
        font-family: $font-primary-medium;
        margin-bottom: 0;
        color: $color-white;
        line-height: 4rem;
        span {
          color: #fe8200;
        }
        @include respond(phone-x-small) {
          font-size: 2.2rem;
          line-height: 2.6rem;
        }
      }
      p {
        font-size: 1.5rem;
        font-family: $font-primary;
        margin-bottom: 0;
        line-height: 2.4rem;
        color: $color-white;
        margin-top: 1rem;
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 2.6rem;
          margin-top: 3rem;
        }
      }
    }
    &__footer {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      button {
        background-color: $color-primary;
        color: $color-white;
        border-radius: 0.7rem;
        border: 0.3rem solid $color-primary;
        outline: none;
        font-size: 1.6rem;
        font-family: $font-primary-semi-bold;
        padding: 0 3.1rem;
        height: 4.9rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &:last-child {
          color: $color-primary;
          background-color: $color-white;
          margin-left: 2.3rem;
        }
        @include respond(phone-x-small) {
          height: 6.5rem;
          font-size: 1.8rem;
          padding: 0 1.6rem;
        }
      }
    }
  }
  .image-section {
    position: relative;
    overflow: hidden;
    background-image: url("@/assets/images/hero-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
    border-radius: 0rem 0.7rem 0.7rem 0rem;
    @include respond(laptop-large) {
      background-size: contain;
    }
    @include respond(laptop-medium) {
      background-size: cover;
    }
  }
}
</style>
