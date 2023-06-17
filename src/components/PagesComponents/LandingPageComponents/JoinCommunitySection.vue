<template>
  <div class="join-community-container my-container">
    <div class="join-community-container__join-community">
      <h2 class="join-community-container__join-community--title">
        Join our community
      </h2>
      <p class="join-community-container__join-community--description">
        Become one of the beneficiaries of our first launch in your area by
        staying connected to our fast growing community.
      </p>
      <div class="join-community-container__join-community--input-field">
        <input type="text" placeholder="Enter your email address here" />
        <button class="btn">Signup</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.join-community-container {
  padding: 0 10rem;
  margin: 8.3rem auto !important;
  @include respond(tab-land) {
    padding: 3.4rem 8rem;
  }
  @include respond(laptop-small) {
    padding: 3.4rem 4rem;
  }
  @include respond(tab-port) {
    margin: 0 !important;
    padding: 0;
  }
  &__join-community {
    background-color: $color-primary;
    max-width: 80rem;
    margin: auto;
    padding: 5.5rem 6rem;
    border-radius: 0.7rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @include respond(tab-port) {
      border-radius: 0;
      max-width: 100%;
    }
    @include respond(phone-x-small) {
      padding: 6.5rem 4rem;
    }
    &--title {
      font-size: 2.3rem;
      font-family: $font-primary-bold;
      line-height: 3.4rem;
      margin: 0;
      text-align: center;
      color: $color-white;
      @include respond(phone-x-small) {
        font-size: 2.9rem;
      }
    }
    &--description {
      font-size: 1.5rem;
      font-family: $font-primary;
      line-height: 2.2rem;
      margin: 2.1rem auto 0;
      color: $color-white;
      text-align: center;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
    &--input-field {
      margin: auto;
      display: flex;
      width: fit-content;
      margin-top: 2.5rem;
      @include respond(phone-x-small) {
        width: 100%;
      }
      input {
        background-color: #dadada;
        width: 30rem;
        border-radius: 0.7rem 0 0 0.7rem;
        color: $color-black;
        line-height: 2rem;
        outline: none;
        font-family: $font-primary;
        padding: 0.9rem 2.9rem;
        font-size: 1.3rem;
        border: none;
        height: 3.8rem;
        &::placeholder {
          color: #7d8488;
        }
        @include respond(phone-x-small) {
          width: 100%;
          font-size: 1.6rem;
          height: 4.6rem;
          padding: 0.9rem 2rem;
        }
        
      }
      .btn {
        width: 8.8rem;
        height: 3.8rem;
        border: none;
        outline: none;
        display: block;
        font-size: 1.5rem;
        font-family: $font-primary-semi-bold;
        background-color: $color-oxford-blue;
        color: $color-white;
        border-radius: 0 0.7rem 0.7rem 0;
        @include respond(phone-x-small) {
          width: 12rem;
          font-size: 1.6rem;
          height: 4.6rem;
        }
      }
    }
  }
}
</style>
