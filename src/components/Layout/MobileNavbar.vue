<template>
  <div class="mobile-navbar">
    <div class="mobile-navbar__header">
      <div class="mobile-navbar__header--logo">
        <router-link to="/">
          <img src="@/assets/icons/bj-logo2.png" alt="Logo" />
        </router-link>
      </div>
      <button class="mobile-navbar__header--humburger" @click="navbarOpen()">
        <img src="@/assets/icons/humburger.svg" alt="Humburger" />
      </button>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="mobile-navbar__body" v-if="navbarData">
        <button class="mobile-navbar__body--header" @click="navbarClose()">
          <img src="@/assets/icons/cancel.svg" alt="Cancel icon" />
        </button>
        <ul class="mobile-navbar__body--list">
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
       <!--  <div class="mobile-navbar__body--card">
          <h2>Want to know more?</h2>
          <p>
            Checkout our FAQ page for answers to your our frequently asked
            questions about us
          </p>
          <button
          @click="navbarData('/FAQ')"
          >Get started</button>
        </div> -->
      </div>
    </Transition>
  </div>
</template>

<script>


export default {
  data() {
    return {
      openNavbar: false,
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
    };
  },
  methods: {
    navbarOpen() {
      this.openNavbar = true;
    },
    navbarClose() {
      this.openNavbar = false;
    },
    activeRoute(val) {
      this.navigationList.forEach((navigation) => {
        navigation.active = false;
      });
      val.active = !val.active;
      this.openNavbar = false;
    },
  },
  
  computed: {
    navbarData() {
      return this.openNavbar;
    },
  },
};




</script>


<style lang="scss" scoped>
.mobile-navbar {
  position: relative;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--logo {
      width: 20.5rem;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    &--humburger {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      padding: 0.8rem 0.5rem;
    }
  }
  &__body {
    background-color: #ebebeb;
    position: absolute;
    top: 7.6rem;
    z-index: 3;
    width: 100vw;
    left: -2rem;
    padding: 3.4rem 10rem;
    height: 100vh;
    overflow-y: auto;
    @include respond(tab-land) {
      padding: 3.4rem 8rem;
    }
    @include respond(laptop-small) {
      padding: 3.4rem 4rem;
    }
    &--header {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      padding: 0;
      display: block;
      margin-left: auto;
    }
    &--list {
      margin-top: 4rem;
      padding-left: 0;
      .item {
        list-style: none;
        padding: 2.5rem 0 1.5rem;
        border-bottom: 0.2rem solid rgba(181, 181, 181, 0.72);
        a {
          font-size: 2.3rem;
          line-height: 2.6rem;
          font-family: $font-primary-semi-bold;
          text-decoration: none;
          color: $color-oxford-blue;
        }
        .active {
          padding: 0 3rem;
          background-color: $color-primary;
          color: $color-white;
          font-family: $font-primary-medium;
        }
        &:first-child {
          padding-top: 0;
        }
      }
    }
    &--card {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 80%;
      flex-direction: column;
      margin: 18rem auto 3rem;
      padding-bottom: 10rem;
      h2 {
        color: $color-oxford-blue;
        font-family: $font-primary-semi-bold;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 2.5rem;
        @include respond(phone-x-small) {
          font-size: 2.9rem;
        }
      }
      p {
        color: $color-oxford-blue;
        font-family: $font-primary;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.5rem;
        line-height: 2.5rem;
        margin-bottom: 2.5rem;
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          line-height: 2.6rem;
        }
      }
      button {
        width: 22.5rem;
        height: 6.4rem;
        border: none;
        outline: none;
        font-size: 2rem;
        font-family: $font-primary-medium;
        background-color: $color-primary;
        color: $color-white;
        border-radius: 0.7rem;
        @include respond(phone-x-small) {
          font-size: 1.8rem;
          height: 6.5rem;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
