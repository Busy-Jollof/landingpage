<template>
  <div class="navbar-container my-container">
    <div class="navbar-container__navbar">
        <router-link to="/" class="navbar-container__navbar--logo">
          <!-- <img src="@/assets/icons/main-logo.svg" alt="Logo" /> -->
          <img src="@/assets/icons/bj-logo2.png" alt="Logo" />
        </router-link>
      <ul class="navbar-container__navbar--list">
        <li
          class="item"
          v-for="(navigation, index) in navigationList"
          :key="index"
        >
          <router-link :to="navigation.path">
            <a
              :class="{ active: navigation.active }"
              @click="activeRoute(navigation)"
            >
              {{ navigation.name }}
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-container__mobile-navbar">
      <mobile-navbar></mobile-navbar>
    </div>
  </div>
</template>

<script>
import MobileNavbar from "./MobileNavbar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MobileNavbar,
  },
  data() {
    return {
      navigationList: [
        {
          name: "Home",
          active: false,
          path: "/",
        },
        {
          name: "About us",
          active: false,
          path: "/about",
        },
        {
          name: "Our timeline",
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
  computed: {
    ...mapGetters("navigation", ["getRoute"]),
  },
  watch: {
    getRoute(val) {
      const activeRoute = this.navigationList.find((nav) => nav.path === val);
      this.activeRoute(activeRoute);
    },
  },
  methods: {
    activeRoute(value) {
      this.navigationList.forEach((navigation) => {
        navigation.active = false;
      });
      value.active = !value.active;
      window.scrollTo(0, 0);
    },
  },
  created() {
    // finding the route on which the page was reloaded
    const activeRoute = this.navigationList.find(
      (nav) => nav.path === this.$route.path
    );
    // activating the route on which the page was reloaded
    this.activeRoute(activeRoute);
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  background-color: $color-white;
  width: 100%;
  padding: 3.4rem 10rem;
  @include respond(tab-land) {
    padding: 3.4rem 8rem;
  }
  @include respond(laptop-small) {
    padding: 3.4rem 4rem;
  }
  @include respond(tab-port) {
    padding: 3.4rem 5rem;
  }
  @include respond(phone-x-small) {
    padding: 2rem;
  }
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include respond(tab-port) {
      display: none;
    }
    &--logo {
      width: 20rem;
      height: auto;
      @include respond(laptop-small) {
        width: 20rem;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &--list {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      .item {
        width: fit-content;
        height: 4.4rem;
        background-color: $color-white;
        list-style: none;
        margin-left: 2.3rem;
        a {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          color: $color-black;
          font-family: $font-primary-medium;
          text-decoration: none;
          border-radius: 0.7rem;
          cursor: pointer;
          @include respond(laptop-small) {
            font-size: 1.4rem;
          }
        }
        .active {
          //padding: 0 3rem;
          padding: 2rem;
          background-color: $color-primary;
          color: $color-white;
          font-family: $font-primary-medium;
          font-size: 1.6rem;
        }
      }
    }
  }
  &__mobile-navbar {
    display: none;
    @include respond(tab-port) {
      display: block;
    }
  }
}
</style>
