<template>
  <div class="timeline-slider-container">
    <h1 class="timeline-slider-container__title">Progress status</h1>
    <h1 class="timeline-slider-container__description">
      Are you a restaurant owner, potential delivery driver or a customer? Join
      our community to get detailed and updated information for each stage of
      our progress.
    </h1>
    <button class="timeline-slider-container__btn"
    @click="openServices('/services-for-everyone')"
    >Join our community</button>


    <div class="timeline-slider-container__persontage-container">
      <div class="timeline-slider-container__persontage-container--content">
        <div class="here-content">
          <h5 class="title">We are here</h5>
          <img src="@/assets/icons/Polygon-dark.png" />
        </div>
        <p class="title"><span>Development</span></p>
        <img src="@/assets/icons/Polygon-dark.png" class="slide-image" />
      </div>
      <div class="timeline-slider-container__persontage-container--box">
        <h1>96% Done</h1>
      </div>
    </div>
    <section class="timeline-slider-container__slider">
      <div class="timeline-slider-container__slider--main-timeline">
        <div class="timeline">
          <div class="timeline-card-main">
            <div class="timeline-card-main__timeline-card">
              <img src="@/assets/icons/Polygon.png" />
              <h5 class="title">Beta Testing</h5>
              <p class="description">
                Rolling out our beta version for some select restaurants,
                delivery drivers, and some
              </p>
              <a>Customers that singed up</a>
            </div>
          </div>
        </div>
        <div class="timeline">
          <div class="circle">
            <img src="@/assets/icons/Polygon.png" />
            <div class="circle-outer">
              <h1>Phase 1</h1>
            </div>
          </div>
          <div class="timeline-card-main">
            <div class="timeline-card-main__timeline-card">
              <h5 class="title">First Rollout</h5>
              <p class="description">
                Our first launch will be in <span>MA</span>, <span>RI</span>,
                <span>CT</span>, <span>NH</span>, <span>NY</span>,
                <span>NJ</span>, <span>PA</span>, <span>DC</span> &
                <span>MD</span>.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline">
          <div class="circle">
            <img src="@/assets/icons/Polygon.png" />
            <div class="circle-outer">
              <h1>Phase 2</h1>
            </div>
          </div>
          <div class="timeline-card-main">
            <div class="timeline-card-main__timeline-card">
              <h5 class="title">Second Rollout</h5>
              <p class="description">
                Our second launch will be in <span>TX</span>, <span>LA</span>,
                <span>WA</span>, <span>NV</span>, <span>AZ</span>,
                <span>OK</span>, <span>IL</span>, <span>FL</span> &
                <span>GA</span>
              </p>
            </div>
          </div>
        </div>
        <div class="timeline">
          <div class="circle">
            <img src="@/assets/icons/Polygon.png" />
            <div class="circle-outer">
              <h1>Phase 3</h1>
            </div>
          </div>
          <div class="timeline-card-main">
            <div class="timeline-card-main__timeline-card">
              <h5 class="title">Third Rollout</h5>
              <p class="description">
                Extending service to the rest of the states based on demand
              </p>
              <a @click="openServices('/contact-us')">Request service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="timeline-slider-container__new-product-card">
      <h2 class="timeline-slider-container__new-product-card--title">
        New Product Rollout
      </h2>
      <p class="timeline-slider-container__new-product-card--description">
        More information to be released to subscribers
      </p>
    </div>
    <h1 class="timeline-slider-container__title">Want to know more?</h1>
    <h1 class="timeline-slider-container__description">
      Checkout our FAQ page for answers to your our frequently asked questions
      about us
    </h1>
    <button 
    class="timeline-slider-container__btn"
    @click="openServices('/faq')"
    >Get started</button>
  </div>
</template>

<script>
export default {
  methods: {
    openServices(routeName) {
      this.$router.push(routeName);
      window.scrollTo(0,0); 
    },
  },
};
</script>

<style lang="scss" scoped>
.timeline-slider-container {
  margin-top: 5.7rem;
  &__title {
    font-size: 3rem;
    font-family: $font-primary-medium;
    line-height: 6.8rem;
    margin-bottom: 0;
    color: $color-oxford-blue;
    text-align: center;
    @include respond(phone-x-small) {
      font-size: 2.5rem;
      font-family: $font-primary-semi-bold;
    }
  }
  &__description {
    font-size: 1.6rem;
    font-family: $font-primary;
    line-height: 2.4rem;
    text-align: center;
    margin: 0 auto;
    max-width: 81rem;
    display: block;
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
    margin: 2.5rem auto 0;
    font-size: 1.6rem;
    font-family: $font-primary-medium;
    background-color: $color-primary;
    color: $color-white;
    border-radius: 0.7rem;
    display: block;
    @include respond(phone-x-small) {
      font-size: 1.8rem;
      height: 6.5rem;
    }
  }
  &__slider {
    background-color: $color-white;
    margin-top: -1rem;
    &--main-timeline {
      position: relative;
      padding-top: 2.7rem;
      &::before {
        content: "";
        display: block;
        width: 9px;
        height: 100%;
        background: #dbf1e3;
        margin: 0 auto;
        position: absolute;
        top: 0;
        border-radius: 0 0 0.7rem 0.7rem;
        left: 0;
        right: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .timeline {
        margin-bottom: 4rem;
        position: relative;
        height: 100%;
        &:last-child {
          padding-bottom: 10rem;
          margin-bottom: 0;
        }
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        &:nth-child(2n) .circle {
          float: right;
          .circle-outer {
            margin-right: auto;
            margin-left: 10.2rem;
            @include respond(phone-x-small) {
              margin-left: auto;
            }
            &::before {
              margin-right: auto;
              margin-left: 10.2rem;
              @include respond(phone-x-small) {
                margin-left: auto;
              }
            }
          }
          img {
            position: absolute;
            transform: rotate(180deg);
            top: 42%;
            left: -16px;
          }
        }
        &:nth-child(2n) .circle:before {
          left: 4px;
        }
        &:nth-child(2n) .timeline-card-main {
          text-align: left;
          &__timeline-card {
            margin-left: auto;
            @include respond(tab-port) {
              padding-left: 0;
              padding-right: 2.7rem;
            }
            img {
              right: 2px;
              left: inherit;
            }
          }
        }
        .circle {
          width: 50%;
          float: left;
          margin-top: 1.3rem;
          position: relative;
          &::before {
            content: "";
            width: 10.2rem;
            height: 3px;
            background: #263238;
            margin: auto 0;
            position: absolute;
            top: 0;
            right: 4px;
            bottom: 0;
            
          }
          .circle-outer {
            width: 10rem;
            height: 10rem;
            text-align: center;
            margin-right: 10.2rem;
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            @include respond(phone-x-small) {
              margin-right: auto;
            }
            &::before,
            &::after {
              content: "";
              width: 10rem;
              height: 10rem;
              margin-right: 10.2rem;
              margin-left: auto;
              border-radius: 50%;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              transition: all 0.33s ease-out 0s;
              @include respond(phone-x-small) {
                margin-right: auto;
              }
            }
            &::before {
              background: #263238;
              left: 0;
            }
            h1 {
              z-index: 2;
              font-size: 1.6rem;
              font-family: $font-primary-bold;
              line-height: 2.4rem;
              margin-bottom: 0;
              color: $color-white;
            }
          }
          img {
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            right: -16px;
          }
        }
        .timeline-card-main {
          width: 50%;
          float: right;
          &__timeline-card {
            padding: 1rem 2.7rem;
            max-width: 31rem;
            position: relative;
            @include respond(tab-port) {
              padding-right: 0;
            }
            .title {
              font-size: 1.6rem;
              font-family: $font-primary-bold;
              line-height: 2.4rem;
              margin-bottom: 1rem;
              max-width: 24.9rem;
              @include respond(phone-x-small) {
                font-size: 2.2rem;
              }
            }
            .description {
              font-size: 1.7rem;
              font-family: $font-primary;
              line-height: 2.6rem;
              margin-bottom: 0;
              @include respond(phone-x-small) {
                font-size: 1.9rem;
              }
              span {
                font-family: $font-primary-semi-bold;
              }
            }
            a {
              font-size: 1.7rem;
              font-family: $font-primary;
              line-height: 2.6rem;
              margin-bottom: 0;
              background-color: $color-primary;
              border-radius: 0.7rem;
              padding: 0.5rem 0.8rem;
              color: $color-white;
              display: flex;
              width: fit-content;
              @include respond(phone-x-small) {
                font-size: 1.9rem;
              }
            }
            img {
              position: absolute;
              transform: translateY(-50%);
              top: 50%;
              left: 4px;
            }
          }
        }
      }
    }
  }
  &__persontage-container {
    position: relative;
    margin-top: 8.4rem;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: block;
      width: 9px;
      height: 100%;
      background: $color-primary;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 0.7rem 0.7rem 0 0;
      z-index: 2;
    }
    &--content {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      padding: 2rem;
      @include respond(tab-port) {
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
      }
      @include respond(phone-x-small) {
        align-items: flex-start;
      }

      
      .title {
        font-size: 1.6rem;
        font-family: $font-primary;
        line-height: 2.4rem;
        margin-bottom: 0;
        color: $color-oxford-blue;
        margin: 0 1rem;
        span {
          font-family: $font-primary-bold;
          @include respond(phone-x-small) {
            font-size: 2.2rem;
          }
        }
        @include respond(phone-x-small) {
          font-size: 1.9rem;
        }
      }
      .here-content {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        @include respond(tab-port) {
          order: 3;
        }
        img {
          width: auto;
          height: auto;
          object-fit: contain;
        }

      }
      .slide-image {
        transform: rotate(180deg) translateY(50%);
        margin-right: 3px;
        position: absolute;
        right: 0;
        top: 50%;
      }
    }
    &--box {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 2rem 0;

      h1 {
        font-size: 1.6rem;
        font-family: $font-primary-medium;
        line-height: 2.4rem;
        margin-bottom: 0;
        color: $color-white;
        text-align: center;
        left: 0;
        padding: 1rem;
        background-color: $color-oxford-blue;
        margin-left: 4px;
        @include respond(phone-x-small) {
          font-size: 1.9rem;
          font-family: $font-primary-semi-bold;
          padding: 2rem;
        }
      }
    }
  }
  &__new-product-card {
    width: 23.7rem;
    background-color: $color-oxford-blue;
    padding: 2.6rem 2rem;
    border-radius: 0.7rem;
    margin: 0 auto 12.4rem;
    display: block;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    @include respond(phone-x-small) {
      width: 29.7rem;
      padding: 4rem 2rem;
    }
    &--title {
      color: $color-white;
      font-size: 1.6rem;
      font-family: $font-primary-bold;
      line-height: 2.4rem;
      text-align: center;
      margin-bottom: 1.6rem;
      @include respond(phone-x-small) {
        font-size: 2.2rem;
      }
    }
    &--description {
      color: $color-white;
      font-size: 1.3rem;
      font-family: $font-primary;
      line-height: 2rem;
      text-align: center;
      margin-bottom: 0;
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
  }
}
</style>
