<template>
  <div class="footer-container">
    <div class="footer-container__footer">
      <b-row>
        <b-col xs="12" sm="6" md="3" lg="3">
          <div class="about-section">
            <!-- <img
              src="@/assets/icons/footer-logo.png"
              alt="Logo"
              class="about-section__logo"
            /> -->
            <img
              src="@/assets/icons/bj-logo2.png"
              alt="Logo"
              class="about-section__logo"
            />
            <p class="about-section__description">
              BusyJollof is an online food delivery and ordering platform built
              with intelligent AI designed to find you the right meals.
            </p>
            <div class="about-section__icons">
              <a><img src="@/assets/icons/insta-logo.svg" alt="Insta" /></a>
              <a><img src="@/assets/icons/fb-logo.svg" alt="Facebook" /></a>
              <a><img src="@/assets/icons/twiter-logo.svg" alt="Twiter" /></a>
            </div>
          </div>
        </b-col>
        <b-col xs="12" sm="6" md="3" lg="3">
          <ul class="pages-section">
            <h3 class="pages-section__title">Pages</h3>
            <li
              class="pages-section__item"
              v-for="(navigation, index) in FooternavigationList"
              :key="index"
              @click="openPage(navigation.path)"
            >
              {{ navigation.name }}
            </li>
          </ul>
        </b-col>
        <b-col xs="12" sm="6" md="2" lg="2">
          <ul class="pages-section">
            <h3 class="pages-section__title">Our Company</h3>
            <li class="pages-section__item">
              <router-link to="/services-restaurant-owners">For Restaurant Owners</router-link>
            </li>
            <li class="pages-section__item">
              <router-link to="/services-delivery-drivers">For Delivery Drivers</router-link>
            </li>
            <li class="pages-section__item">
              <router-link to="/services-for-everyone">For Everyone</router-link>
            </li>
            <li class="pages-section__item">
              <router-link to="/FAQ">FAQ</router-link>
            </li>
          </ul>
        </b-col>
        <b-col xs="12" sm="6" md="4" lg="4">
          <div class="information-section">
            <h2 class="information-section__title">For more information</h2>
            <p class="information-section__description">
              Contact us at info@busyjollof.com or click the button below to
              send us a message
            </p>
            <button class="information-section__btn" @click="openPage('/contact-us')">Contact us</button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="footer-container__copy-right">
      <p>BusyJollof LLC Copyright © 2023 | All rights reserved</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      FooternavigationList: [
        {
          name: "Home",
          active: false,
          path: "/",
        },
        {
          name: "About",
          active: false,
          path: "/about",
        },
        {
          name: "Timeline",
          active: false,
          path: "/timeline",
        },
        {
          name: "Launch with us",
          active: false,
          path: "/launch-with-us",
        },
        {
          name: "Contact us",
          active: false,
          path: "/contact-us",
        },
      ],
      isActive: 0,
    };
  },
  methods: {  
    ...mapActions('navigation', ['setRoute']),    
    openPage(routePath) {
      this.$router
        .push(routePath)
        .then(() => {
          this.setRoute(routePath)
          window.scrollTo(0, 0);
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: $color-oxford-blue;
  padding: 8rem 10rem 5.3rem;
  @include respond(tab-port) {
    padding: 4.5rem 6rem;
  }
  @include respond(phone-x-small) {
    padding: 4.5rem 4rem;
  }
  &__footer {
    border-bottom: 0.2rem solid #4d555a;
    padding-bottom: 5.3rem;
    max-width: 140rem;
    margin: auto;
    
    .about-section {
      @include respond(tab-port) {
        margin-bottom: 4rem;
        margin-right: 5rem;
      }
      @include respond(phone-x-small) {
        margin-right: 0;
      }
      &__logo {
        width: 20.4rem;
        height: auto;
        @include respond(tab-land) {
          width: 18rem;
        }
        @include respond(phone-x-small) {
          width: 22rem;
        }
      }
      &__description {
        font-size: 1.4rem;
        font-family: $font-primary;
        color: $color-white;
        line-height: 2.3rem;
        margin-top: 1.3rem;
        margin-bottom: 0;
        padding-right: 2rem;
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 2.6rem;
          padding-right: 0;
        }
      }
      &__icons {
        a {
          img {
            width: 2.5rem;
            height: 2.5rem;
            margin-right: 1.4rem;
            margin-top: 1.6rem;
            cursor: pointer;
            @include respond(phone-x-small) {
              width: 3rem;
              height: 3rem;
              margin-top: 2.7rem;
              margin-right: 2.4rem;
            }
          }
        }
      }
    }

    .pages-section {
      padding: 0;
      margin: 0 auto;
      width: fit-content;
      @include respond(tab-port) {
        margin-bottom: 4rem;
        margin: 0 0 4rem;
      }
      &__item {
        font-size: 1.5rem;
        font-family: $font-primary;
        color: $color-white;
        line-height: 3rem;
        list-style: none;
        cursor: pointer;
        a {
          color: $color-white;
          text-decoration: none;
        }
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 4rem;
        }
      }
      &__title {
        font-size: 1.9rem;
        font-family: $font-primary-semi-bold;
        line-height: 2.8rem;
        color: $color-white;
        margin-bottom: 1rem;
        @include respond(phone-x-small) {
          font-size: 2.4rem;
        }
      }
    }
    .information-section {
      &__title {
        font-size: 1.9rem;
        font-family: $font-primary-semi-bold;
        line-height: 2.8rem;
        color: $color-white;
        text-align: right;
        margin-bottom: 1rem;
        @include respond(tab-land) {
          text-align: left;
        }
        @include respond(phone-x-small) {
          font-size: 2.4rem;
        }
      }
      &__description {
        max-width: 36.8rem;
        font-size: 1.4rem;
        font-family: $font-primary;
        color: $color-white;
        line-height: 2.3rem;
        margin-top: 1.3rem;
        display: block;
        margin-left: auto;
        margin-bottom: 0;
        text-align: right;
        @include respond(tab-land) {
          margin-left: 0;
          text-align: left;
        }
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 2.6rem;
        }
      }
      &__btn {
        width: 22.7rem;
        height: 5rem;
        border: none;
        outline: none;
        display: block;
        margin-left: auto;
        margin-top: 2.6rem;
        font-size: 1.6rem;
        font-family: $font-primary-medium;
        background-color: $color-primary;
        color: $color-white;
        border-radius: 0.7rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        @include respond(tab-land) {
          margin-left: 0;
        }
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          height: 6.5rem;
          width: 20rem;
        }
      }
    }
  }
  &__copy-right {
    margin-top: 5.3rem;
    p {
      font-size: 1.5rem;
      color: $color-white;
      margin-bottom: 0;
      text-align: center;
    }
  }
}
</style>
