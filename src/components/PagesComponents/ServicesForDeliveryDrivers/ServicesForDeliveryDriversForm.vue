<template>
  <div class="delivery-drivers-form">
    <h2 class="delivery-drivers-form__title">Get started</h2>
    <p class="delivery-drivers-form__description">
      Fill the form below to reserve a spot as a delivery driver
    </p>
    <form class="delivery-drivers-form__form" @submit.prevent="submitForm()">
      <b-row cols="2">
        <b-col class="py-3" cols="12" sm="12" md="11" lg="10" xl="10">
          <b-row cols="2">
            <b-col class="py-3" cols="12" sm="12" md="5" lg="5" xl="5">
              <div class="delivery-drivers-form__form--field">
                <p>First name <span>*</span></p>
                <input type="text" name="firstName" v-model="user.firstName" />
                <h4 v-if="errors.firstNameError" class="error-msg">
                  First name is required
                </h4>
                <h4 v-if="errors.firstNameErrorSubmitted" class="error-msg">
                  Enter your name in the right format
                </h4>
              </div>
            </b-col>

            <b-col class="py-3 ml-auto" cols="12" sm="12" md="5" lg="5" xl="5">
            
            <div class="delivery-drivers-form__form--field">
                <p>Last name <span>*</span></p>
                <input type="text" name="lastName" v-model="user.lastName" />
                <h4 v-if="errors.lastNameError" class="error-msg">
                  Last name is required
                </h4>
                <h4 v-if="errors.lastNameErrorSubmitted" class="error-msg">
                  Enter your name in the right format
                </h4>
              </div>
            </b-col>

            <b-col class="py-3" cols="12" sm="12" md="12" lg="12" xl="12">

              <div class="delivery-drivers-form__form--field">
                <p>Email address <span>*</span></p>
                <input type="email" name="email" v-model="user.email" />
                <h4 v-if="errors.emailError" class="error-msg">
                  Email is required!
                </h4>
                <h4 v-if="errors.emailError2" class="error-msg">
                  Enter a valid email
                </h4>
              </div>
            </b-col>
          </b-row>
        </b-col>
        
        <b-col class="py-3" cols="12" sm="12" md="11" lg="10" xl="10">
          <b-row cols="3">
            <b-col class="py-3" cols="12" sm="12" md="4" lg="4" xl="4"
              ><div class="delivery-drivers-form__form--field">
                <p>Phone number <span>*</span></p>
                <input
                  type="number"
                  name="number"
                  v-model="user.phoneNumber"
                  :maxlength="user.maxPhoneNumber"
                />
                <h4 v-if="errors.phoneNumberError" class="error-msg">
                  Phone number is required
                </h4>
                <h4 v-if="errors.maxlength" class="error-msg">
                  Number must be less than or equal to 10.
                </h4>
              </div>
            </b-col>
            <b-col
              class="py-3 px-2 m-sm-0 px-sm-2 px-md-0 px-lg-5 px-xl-4 m-auto mb-0 mt-0"
              cols="12"
              sm="12"
              md="2"
              lg="2"
              xl="2"
              ><div class="delivery-drivers-form__form--field">
                <p>State <span>*</span></p>
                <state-dropdown
                  @stateValueGet="state"
                  :stateError="errors.stateError"
                ></state-dropdown>
              </div>
            </b-col>

            <b-col class="py-3" cols="12" sm="12" md="4" lg="4" xl="4">

              <div class="delivery-drivers-form__form--field">
                <p>City <span>*</span></p>
                <input type="text" name="city" v-model="user.city" />
                <h4 v-if="errors.cityError" class="error-msg">
                  City is required
                </h4>
                <h4 v-if="errors.cityErrorSubmitted" class="error-msg">
                  Enter a valid US city!
                </h4>
              </div>
            </b-col>
          </b-row>

          <b-col class="py-3" cols="12" sm="12" md="11" lg="11" xl="10">
            <b-row cols="2">
              <b-col class="py-3" cols="12" sm="12" md="8" lg="8" xl="8">
                <div class="delivery-drivers-form__form--field">
                  <p>
                    Do you currently deliver for another company? <span>*</span>
                  </p>
                  <div class="selectParent">
                    <select v-model="user.currentlyDeliver">
                      <option hidden selected></option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    <img src="@/assets/icons/vector_icon.svg" />
                  </div>
                  <h4 v-if="errors.currentlyDeliverError" class="error-msg">
                    Currently deliver for another company is required
                  </h4>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-col>
      </b-row>
      <p class="delivery-drivers-form__form--message">
        By clicking the reserve now button, you acknowledge receiving
        communications from us through emails, phone calls, or otherwise.
      </p>
      <p
        class="contact-container__form--message success-message"
        v-if="successMessage"
      >
        <img src="@/assets/icons/check-logo.svg" alt="" /> Thanks for submitting
        the form!
      </p>
      <button class="delivery-drivers-form__form--btn">
        <the-loader
          class="btn-loader"
          v-if="loader"
          @click.prevent=""
        ></the-loader
        >Reserve now
      </button>
    </form>
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
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        stateValue: null,
        city: null,
        currentlyDeliver: null,
        maxPhoneNumber: 10,
      },
      errors: {
        firstNameError: false,
        firstNameErrorSubmitted: false,
        lastNameError: false,
        lastNameErrorSubmitted: false,
        emailError: false,
        emailError2: false,
        phoneNumberError: false,
        stateError: false,
        cityError: false,
        cityErrorSubmitted: false,
        currentlyDeliverError: false,
        maxlength: false,
      },
      isError: false,
      successMessage: false,
      loader: false,
    };
  },
  watch: {

    "user.firstName"() {
      if(!/^[a-zA-Z]+$/.test(this.user.firstName) || this.user.firstName.length < 3){
        this.errors.firstNameErrorSubmitted = true;
      }else{
        this.errors.firstNameErrorSubmitted = false;
      }
    },

    "user.lastName"() {
      if(!/^[a-zA-Z]+$/.test(this.user.lastName) || this.user.lastName.length < 3){
        this.errors.lastNameErrorSubmitted = true;
      }else{
        this.errors.lastNameErrorSubmitted = false;
      }
    },

    "user.email"() {
      if (
        this.user.email.indexOf("@") === -1 ||
        this.user.email.indexOf("@") !== this.user.email.lastIndexOf("@") ||
        this.user.email.indexOf(".") === -1
      ) {
        this.errors.emailError2 = true;
      } else {
        this.errors.emailError2 = false;
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

    "user.city"() {
      if (this.user.city.length < 4) {
        this.errors.cityErrorSubmitted = true;
      } else if (!/^[a-zA-Z]+$/.test(this.user.city)) {
        this.errors.cityErrorSubmitted = true;
      } else {
        this.errors.cityErrorSubmitted = false;
      }
    },

  },
  methods: {
    submitForm() {
      (this.successMessage = false),
        this.user.firstName == null
          ? (this.errors.firstNameError = true)
          : (this.errors.firstNameError = false);
      this.user.lastName == null
        ? (this.errors.lastNameError = true)
        : (this.errors.lastNameError = false);
      this.user.email == null
        ? (this.errors.emailError = true)
        : (this.errors.emailError = false);
      this.user.phoneNumber == null
        ? (this.errors.phoneNumberError = true)
        : (this.errors.phoneNumberError = false);
      this.user.stateValue == null
        ? (this.errors.stateError = true)
        : (this.errors.stateError = false);
      this.user.city == null
        ? (this.errors.cityError = true)
        : (this.errors.cityError = false);
      this.user.currentlyDeliver == null
        ? (this.errors.currentlyDeliverError = true)
        : (this.errors.currentlyDeliverError = false);

      let errorArray = Object.values(this.errors);
      this.isError = errorArray.find((error) => error === true);
      this.loader = false;
      if (!this.isError) this.emptyFields();
    },
    emptyFields() {
      this.loader = true;
      this.user = {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        state: null,
        city: null,
        currentlyDeliver: null,
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
.delivery-drivers-form {
  &__title {
    font-size: 2.5rem;
    font-family: $font-primary-semi-bold;
    line-height: 3.4rem;
    margin-bottom: 0rem;
    @include respond(phone-x-small) {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    margin-bottom: 2.5rem;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
  &__form {
    &--field {
      p {
        font-size: 1.6rem;
        font-family: $font-primary-semi-bold;
        line-height: 2.4rem;
        color: #263238;
        margin-bottom: 1rem;
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
      }
      .selectParent {
        width: 100%;
        position: relative;
        background-color: #ebebeb;
        font-size: 1.6rem;
        font-family: $font-primary;
        height: 4.6rem;
        border-bottom: 2.5px solid rgba(2, 152, 55, 0.95);
        max-width: 10.4rem;
        @include respond(tab-port) {
          max-width: 100%;
        }
        img {
          position: absolute;
          right: 1rem;
          transform: translateY(-30%);
          top: 50%;
          width: 2rem;
        }
        select {
          width: 100%;
          height: 100%;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          background: none;
          border-radius: 0;
          padding: 0 1rem;
          margin-top: 0.3rem;
        }
      }
      .error-msg {
        font-size: 1.4rem;
        margin: 1rem 0 0;
        color: red;
      }
    }
    &--message {
      font-size: 1.4rem;
      font-family: $font-primary;
      line-height: 2.1rem;
      margin-bottom: 2.2rem;
      color: $color-primary;
      max-width: 64.1rem;
      margin-top: 2.5rem;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
    .success-message {
      display: flex;
      align-items: center;
      color: $color-primary;
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
}
</style>
