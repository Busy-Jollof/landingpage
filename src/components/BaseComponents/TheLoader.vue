<template>
  <div class="the-loader">
    <b-spinner></b-spinner>
  </div>
</template>

<style lang="scss" scoped>
.the-loader {
  .spinner-border {
    --bs-spinner-border-width: 0.12em;
    color: $color-primary;
    width: 3rem;
    height: 3rem;
    font-size: 2.5rem;
  }
}
</style>
