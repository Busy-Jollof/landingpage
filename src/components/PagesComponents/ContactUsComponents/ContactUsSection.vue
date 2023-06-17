<template>
  <div class="contact-container my-container">
    <b-row cols="2">
      <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="px-0">
        <form class="contact-container__form" @submit.prevent="submitForm()">
          <h2 class="contact-container__form--title">Contact us</h2>
          <p class="contact-container__form--description">
            For more information, inquires, concern or to request service in your area, send us an email at
            info@busyjollof.com or fill the form below to get in touch with us.
          </p>

          <div class="contact-container__form--field">

            <p>Full name <span>*</span></p>
            <input type="text" name="firstName" v-model="user.fullName" />
            <h4 v-if="errors.nameError" class="error-msg">
              First name is required
            </h4>
            <h4 v-if="errors.nameErrorSubmitted" class="error-msg">
              Enter your full name 
            </h4>
          </div>

          <div class="contact-container__form--field">
            <p>Email address <span>*</span></p>
            <input type="email" v-model="user.email" />
            <h4 v-if="errors.emailError" class="error-msg">
              Email is required!
            </h4>
            <h4 v-if="errors.emailErrorSubmitted" class="error-msg">
              Enter a valid email
            </h4>
          </div>

          <b-row cols="2">
            <b-col cols="12" sm="12" md="7" lg="7" xl="7">

              <div class="contact-container__form--field">

                <p>Phone number <span>*</span></p>
                <input
                  type="number"
                  name="phoneNumber"
                  v-model="user.phoneNumber"
                  :maxlength="user.maxPhoneNumber"
                />
                <h4 v-if="errors.phoneNumberError" class="error-msg">
                  Phone number is required
                </h4>
                <h4 v-if="errors.maxlength" class="error-msg">
                  Phone number is incomplete
                </h4>
              </div>

            </b-col>

            <b-col
              cols="12"
              sm="12"
              md="3"
              lg="3"
              xl="3"
              class="ml-auto px-2 px-sm-2 px-md-0 px-lg-0 px-xl-0"
            >
              <div class="contact-container__form--field">
                <p>State <span>*</span></p>
                <state-dropdown
                  @stateValueGet="state"
                  :stateError="errors.stateError"
                ></state-dropdown>
              </div>
            </b-col>
          </b-row>
          <div class="contact-container__form--field">
            <p>Reason for contacting us?</p>
            <textarea
              name="contactingReason"
              id="contactingReason"
              v-model="user.contactingReason"
            ></textarea>
            <h4 v-if="errors.contactingReasonError" class="error-msg">
              Reason for contacting is required
            </h4>
          </div>
          <p class="contact-container__form--message">
            By clicking the reserve now button, you acknowledge receiving
            communications from us through emails, phone calls, or otherwise.
          </p>
          <p
            class="contact-container__form--message success-message"
            v-if="successMessage"
          >
            <img src="@/assets/icons/check-logo.svg" alt="" /> Thanks for
            submitting the form!
          </p>
          <button class="contact-container__form--btn">
            <the-loader
              class="btn-loader"
              v-if="loader"
              @click.prevent=""
            ></the-loader
            >Reserve now
          </button>
        </form>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="px-0">
        <div class="contact-container__image">
          <img src="@/assets/images/contactus-bg.png" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TheLoader from "@/components/BaseComponents/TheLoader.vue";
import StateDropdown from "@/components/BaseComponents/StateDropdown.vue";
export default {
  components: {
    TheLoader,
    StateDropdown,
  },
  data() {
    return {
      user: {
        fullName: null,
        email: null,
        phoneNumber: null,
        contactingReason: null,
        maxPhoneNumber: 10,
        stateValue: null,
      },
      errors: {
        nameError: false,
        nameErrorSubmitted: false,
        emailError: false,
        emailErrorSubmitted: false,
        phoneNumberError: false,
        contactingReasonError: false,
        maxlength: false,
        stateError: false,
      },
      isError: false,
      successMessage: false,
      loader: false,
    };
  },
  watch: {
    "user.fullName"() {
      if(!/^[a-zA-Z]+$/.test(this.user.fullName) || this.user.fullName.length < 5){
        this.errors.nameErrorSubmitted = true;
        console.log("Output working")
      }else{
        this.errors.nameErrorSubmitted = false;
      }
    },

    "user.email"() {
      if (
        this.user.email.indexOf("@") === -1 ||
        this.user.email.indexOf("@") !== this.user.email.lastIndexOf("@") ||
        this.user.email.indexOf(".") === -1
      ) {
        this.errors.emailErrorSubmitted = true;
      } else {
        this.errors.emailErrorSubmitted = false;
      }
    },

    "user.phoneNumber"(value) {
      if (value.length < 10) {
        this.errors.maxlength = true;
      } else if (value.length > 10) {
        this.errors.maxlength = true;
      } else {
        this.errors.maxlength = false;
      }
    }, 


  },
  methods: {
    submitForm() {
      (this.successMessage = false),
        this.user.fullName == null
          ? (this.errors.nameError = true)
          : (this.errors.nameError = false);
      this.user.email == null
        ? (this.errors.emailError = true)
        : (this.errors.emailError = false);
      this.user.phoneNumber == null
        ? (this.errors.phoneNumberError = true)
        : (this.errors.phoneNumberError = false);
      this.user.stateValue == null
        ? (this.errors.stateError = true)
        : (this.errors.stateError = false);
      this.user.contactingReason == null
        ? (this.errors.contactingReasonError = true)
        : (this.errors.contactingReasonError = false);
      let errorArray = Object.values(this.errors);
      this.isError = errorArray.find((error) => error === true);
      this.loader = false;
      if (!this.isError) this.emptyFields();
    },
    emptyFields() {
      this.loader = true;
      this.user = {
        firstName: null,
        email: null,
        phoneNumber: null,
        state: null,
        contactingReason: null,
      };
      this.successMessage = true;
      this.loader = false;
    },
    state(val) {
      this.user.stateValue = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-container {
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
  &__form {
    width: 100%;
    &--title {
      font-size: 3.5rem;
      font-family: $font-primary-semi-bold;
      line-height: 6.8rem;
      margin-bottom: 0;
      color: $color-oxford-blue;
      @include respond(phone-x-small) {
        font-size: 3.5rem;
      }
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      margin: 2rem 0 1.8rem;
      max-width: 56rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
    &--field {
      max-width: 47.4rem;
      @include respond(tab-port) {
        max-width: 100%;
      }
      p {
        font-size: 1.6rem;
        font-family: $font-primary-semi-bold;
        line-height: 2.4rem;
        color: #263238;
        margin-bottom: 1rem;
        margin-top: 3.3rem;
        span {
          color: $color-primary;
        }
        @include respond(phone-x-small) {
          font-size: 1.8rem;
        }
      }
      input {
        background-color: #ebebeb;
        border: none;
        border-bottom: 2.5px solid rgba(2, 152, 55, 0.95);
        font-size: 1.6rem;
        font-family: $font-primary;
        outline: none;
        width: 100%;
        height: 4.6rem;
        padding: 0 1rem;
        margin-bottom: 0;
      }
      textarea {
        background-color: #ebebeb;
        border: none;
        border-bottom: 2.5px solid rgba(2, 152, 55, 0.95);
        font-size: 1.6rem;
        font-family: $font-primary;
        outline: none;
        width: 100%;
        height: 12.3rem;
        padding: 1rem;
        resize: none;
      }
      .error-msg {
        font-size: 1.2rem;
        margin: 1rem 0 0;
        color: red;
      }
    }
    .row {
      max-width: 48rem;
      @include respond(tab-port) {
        max-width: inherit;
      }
    }
    &--message {
      font-size: 1.4rem;
      font-family: $font-primary;
      line-height: 2.1rem;
      margin-bottom: 2.2rem;
      color: $color-primary;
      max-width: 64.1rem;
      margin-top: 3.7rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
    .success-message {
      display: flex;
      align-items: center;
      img {
        margin-right: 1rem;
        height: 2rem;
      }
    }
    &--btn {
      width: 22.7rem;
      height: 5rem;
      border: none;
      outline: none;
      margin: 1.2rem 0 0;
      font-size: 1.6rem;
      font-family: $font-primary-medium;
      background-color: $color-primary;
      color: $color-white;
      border-radius: 0.7rem;
      position: relative;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        height: 6.5rem;
      }
    }
  }

  &__image {
    height: 100%;
    width: 100%;
    position: relative;
    @include respond(tab-port) {
      display: none;
    }
    img {
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-64%, -48%);
      @include respond(laptop-medium) {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
