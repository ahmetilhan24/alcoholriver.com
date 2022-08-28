<template>
  <header class="app-header flex--row row--middle--center">
    <div class="app-header__logo flex--row row--middle--center">
      <img src="@/static/logo.png" alt="" />
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
}
</script>
<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 60px;
  background-color: $primary-color-light;
  &__logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    margin-top: 30px;
    border: 7px solid $primary-color-light;
    img {
      width: 50px;
    }
  }
}
</style>
