<template>
  <div class="faq-section my-container">
    <h1 class="faq-section__title">Frequently asked questions</h1>
    <p class="faq-section__description">
      Get answers to your our frequently asked questions about our launch
    </p>
    <div
      class="faq-section__question"
      v-for="(question, index) in questions"
      :key="index"
    >
      <h2 class="faq-section__question--title">
        <span>Q:</span> {{ question.title }}
      </h2>
      <p class="faq-section__question--description">
        {{ question.description }}
      </p>
    </div>
    <div class="faq-section__btn-container">
      <button class="faq-section__btn-container--btn" @click="openPage('/launch-with-us')">
        Reserve a spot now
      </button>
    </div>
    <div class="faq-section__contact-us">
      <h2 class="faq-section__contact-us--title">Still have questions?</h2>
      <p class="faq-section__contact-us--description">
        If you have questions that was not answered on the FAQ section, please
        click the button below to contact us.
      </p>
      <button class="faq-section__contact-us--btn" @click="openPage('/contact-us')">Contact us</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      questions: [
        {
          title: "Is reserving a spot required to use BusyJollof?",
          description:
            "No, it is not. It is for anyone interested in testing the beta phase of our app. If you do not reserve a spot, it only means you will get to start using our app when it is ready for the public.",
        },
        {
          title: "What are the benefits for reserving a spot?",
          description:
            "Reserving a spot places you on our priority list. You will be part of the first ones to test our launches and any of our new features and receive promotional updates, coupons, or offers in your area.",
        },
        {
          title: "What happens after i reserve a spot?",
          description:
            "After you reserve a spot, You will be shortlisted as the first set of people to test the beta version of our app when we deploy. ",
        },
        {
          title: "When is BusyJollof launching to the public?",
          description:
            "Although we can not provide a specific time for our full launch, we anticipate launching before the end of the year’s first quarter. You can also receive updates on our launch timeline progress by reserving a spot.",
        },
        {
          title: "Is BusyJollof launching in all 50 states?",
          description:
            "Yes. Please check our timeline page for more information.",
        },
      ],
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
.faq-section {
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
  &__title {
    font-size: 3rem;
    font-family: $font-secondary-medium;
    line-height: 3.4rem;
    margin-bottom: 1rem;
    @include respond(phone-x-small) {
      font-size: 3.5rem;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    margin: 0;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
  &__question {
    margin: 2rem 0;
    &--title {
      font-size: 1.6rem;
      font-family: $font-primary-bold;
      line-height: 2.4rem;
      margin: 0;
      color: $color-primary;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
      span {
        color: $color-black;
      }
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      margin: 0;
      max-width: 96rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
  }
  &__btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ddf2e4;
    margin: 12.5rem 0 10.5rem;
    &--btn {
      width: 22.7rem;
      height: 5rem;
      border: none;
      outline: none;
      margin: 4.8rem 0;
      font-size: 1.6rem;
      font-family: $font-primary-medium;
      background-color: $color-primary;
      color: $color-white;
      border-radius: 0.7rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        height: 6.5rem;
        margin: 8rem 2rem;
        width: 30rem;
      } 
    }
  }
  &__contact-us {
    display: block;
    @include respond(phone-x-small) {
      display: none;
    }
    &--title {
      font-size: 3rem;
      font-family: $font-secondary-medium;
      line-height: 3.4rem;
      margin-bottom: 0;
      font-weight: 500;
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      margin: 0.5rem 0 0;
      max-width: 77rem;
    }
    &--btn {
      width: 22.7rem;
      height: 5rem;
      border: none;
      outline: none;
      margin: 1.2rem 0 0;
      font-size: 1.5rem;
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
</style>
