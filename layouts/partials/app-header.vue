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
  height: 50px;
  background-color: $gray-two;
  position: sticky;
  top: 0;
  border-bottom: 1px solid $dark-three;
  &__logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    margin-top: 40px;
    border: 3px solid $dark-three;
    box-shadow: rgba(0, 0, 0, 0.221) 0px 7px 8px;
    @include medium-device {
      width: 64px;
      height: 64px;
    }

    @include medium-device {
      width: 60px;
      height: 60px;
    }
    img {
      width: 40px;
      @include medium-device {
        width: 36px;
      }
      @include small-device {
        width: 32px;
      }
    }
  }
}
</style>
