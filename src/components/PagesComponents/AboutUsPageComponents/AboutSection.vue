<template>
  <div class="about-container">
    <img src="@/assets/images/rectangle-bg.png" alt="" />
    <div class="about-container__about my-container">
      <h1 class="about-container__about--title">About us</h1>
      <p class="about-container__about--description">
        We are BusyJollof. An online food ordering and delivery service. Yes,
        you read that right! "Another food delivery service, yet again" As you
        might have figured out, the food delivery market is already saturated by
        a lot of heavy hitters controlling what when you can eat to how much any
        restaurant on their platforms makes. However, we are not here to compete
        with any of that. your go-to destination for African-inspired meals
        delivered to your doorstep. We are proud to introduce a groundbreaking
        food ordering and delivery service specializing exclusively in
        African-inspired cuisine. As the first of its kind in the United States,
        BusyJollof revolutionizes how you explore, order, and savor the rich
        flavors of African meals.
      </p>

      <p class="about-container__about--description">
        At BusyJollof, we understand the frustration that often accompanies
        ordering African-inspired meals. Many talented chefs who create these
        culinary delights with the type and quantity of meals they make are not
        easily accessible on popular food delivery apps or platforms. This leads
        to a chaotic experience, requiring anyone who wants to order an
        authentic African-inspired meal to only rely on making scattered
        WhatsApp calls or word-of-mouth recommendations with a lengthy and
        descriptive phone call before they can place an order. This can not be
        in the year 2023, and we aim to change that by providing a seamless,
        efficient, and reliable platform where you can easily search for your
        favorite African meals
      </p>

      <h2><b>Our Unique Approach </b></h2>

      <p class="about-container__about--description">
        BusyJollof is different from any other food delivery app you've
        encountered. We go beyond the traditional search options and introduce a
        "search by meal" style app. This means you can explore various African
        dishes, categorized by meal types, such as Snacks, Swallows, Soups, etc.
        Even on special occasions. Our curated selection of meals ensures you
        have a diverse range of options at your fingertips, allowing you to
        discover new and exciting flavors. These are significant categories of
        African-inspired meals showcasing the richness of the motherland
        flavors, which have been constantly underrepresented in mainstream food
        delivery platforms, and we aim to change that. BusyJollof seeks to
        provide a platform where every African meal can shine, capturing the
        essence of the continent's vibrant food culture.
      </p>

      <h2><b>No Competition, Only Innovation </b></h2>

      <p class="about-container__about--description">
        
        BusyJollof stands out from the crowd because there is simply
        no competition. We fill a void in the market by exclusively focusing on
        African-inspired meals, bringing together talented chefs and passionate
        food lovers in a dedicated community. Our dedication to African cuisine
        and commitment to excellence set us apart from any other food delivery
        service. Join the BusyJollof community today and embark on a culinary
        journey. Experience the convenience of ordering your favorite African
        meals with just a few taps on your smartphone. Delight your taste buds
        with the authentic flavors, tantalizing spices, and vibrant colors of
        African cuisine, and all delivered straight to your door. At BusyJollof,
        we believe that every meal tells a story. Let us be a part of your
        culinary adventure and create unforgettable dining experiences, one dish
        at a time.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  position: relative;
  img {
    position: absolute;
    width: 100%;
    object-fit: fill;
    height: 100%;
    z-index: -1;
    @include respond(tab-port) {
      object-fit: none;
    }
  }
  &__about {
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
    &--title {
      font-size: 3.5rem;
      font-family: $font-primary-semi-bold;
      line-height: 6.8rem;
      margin-bottom: 6.2rem;
      @include respond(phone-x-small) {
        margin-bottom: 4rem;
        font-size: 3.5rem;
      }
    }
    &--description {
      font-size: 1.6rem;
      font-family: $font-primary;
      line-height: 2.4rem;
      margin: 1rem 0 2.5rem;
      //max-width: 96rem;
      @include respond(tab-port) {
        margin: 3rem 0;
      }
      @include respond(phone-x-small) {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
    }
  }
}
</style>
