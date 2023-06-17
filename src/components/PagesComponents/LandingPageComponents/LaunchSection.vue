<template>
  <div class="launch-section-container my-container">
    <div class="launch-section">
      <b-row cols="2">
        <b-col
          cols="6"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="launch-section__left"
        >
          <div class="launch-section__left--container">
            <h2 class="title">Launch with us</h2>
            <p class="description">
              As we make this historic debut, we invite you to join us as part of our beta user community. Are you a restaurant owner, delivery driver, or lover of African-inspired meals? Be the first to experience Busyjollof's new features with all the perks and fun that come with it.
            </p>
            <button class="btn" @click="getStarted('/launch-with-us')">Get started</button>
          </div>
        </b-col>
        <b-col
          cols="6"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="launch-section__right"
        >
          <img
            src="@/assets/images/milestone-achieved.png"
            alt="Milestone Achieved"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {  
    ...mapActions('navigation', ['setRoute']),    
    getStarted(routePath) {
      console.log('mlml;kl;');
      this.$router
        .push(routePath)
        .then(() => {
          this.setRoute(routePath)
          window.scrollTo(0, 0);
        })
        .catch(() => {});
    },
  },
}
</script>

<style lang="scss" scoped>
.launch-section-container {
  padding: 0 10rem;
  margin: 11.1rem auto 0 !important;
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

  .launch-section {
    background: radial-gradient(
      53.47% 53.47% at 50.04% 46.53%,
      #263238 18.75%,
      rgba(38, 47, 56, 0.921026) 77.06%,
      rgba(38, 45, 56, 0.86) 100%
    );
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.7rem;
    @include respond(laptop-small) {
      padding: 0 8rem;
    }
    @include respond(tab-port) {
      padding: 0 6rem;
      border-radius: 0;
    }
    @include respond(phone-x-small) {
      padding: 0 4rem;
    }
    &__right {
      width: 40%;
      margin: 8.6rem auto;
      order: 2;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @include respond(tab-port) {
        order: 1;
        width: 100%;
        justify-content: center;
      }
      img {
        width: auto;
        height: auto;
        object-fit: contain;
        @include respond(laptop-small) {
          width: 100%;
        }
        @include respond(tab-port) {
          width: 70%;
        }
        @include respond(phone-x-small) {
          width: 100%;
        }
      }
    }
    &__left {
      width: 60%;
      order: 1;
      @include respond(laptop-small) {
        padding: 4rem 0;
      }
      @include respond(tab-port) {
        order: 2;
        width: 100%;
        padding: 0;
      }
      &--container {
        width: 52.7rem;
        margin: 8.6rem auto;
        @include respond(laptop-small) {
          width: 100%;
        }
        @include respond(tab-port) {
          margin-top: 0;
        }
        .title {
          font-size: 2.3rem;
          font-family: $font-primary-semi-bold;
          line-height: 3.4rem;
          margin: 0;
          color: $color-white;
          @include respond(phone-x-small) {
            font-size: 2.9rem;
          }
        }
        .description {
          font-size: 1.6rem;
          font-family: $font-primary;
          line-height: 2.2rem;
          //margin: 0.7rem auto 3.4rem;
          margin-top: 0.6rem;
          margin-bottom: 1.9rem;
          color: $color-white;
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
          background-color: $color-primary;
          color: $color-white;
          border-radius: 0.7rem;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          @include respond(phone-x-small) {
            font-size: 1.8rem;
            height: 6.5rem;
          }
        }
      }
    }
  }
}
</style>
