<template>
  <header class="app-header flex--row row--middle--center">
    <div class="app-header__content flex--row row--middle--center">
      <div class="header-logo flex--row row--middle--center">
        <img src="@/static/logo.png" alt="" />
      </div>
      <span class="header-slogan"
        ><strong>"Alman Saflık Yasasına Göre Kodlanmıştır"</strong></span
      >
      <div class="header-right-menus">
        <button class="btn" @click="whatIDrink">Ne içsem?</button>
      </div>
    </div>
  </header>
</template>
<script>
import { toAlcoholPosition } from '~/plugins/what-i-can.pluign.js'

export default {
  name: 'AppHeader',
  methods: {
    whatIDrink() {
      toAlcoholPosition()
    },
  },
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
  z-index: 100;
  &__content {
    justify-content: space-between;
    padding: 0;
    height: 100%;
    max-width: $screen-padding;
    width: 100%;
    @include large-device {
      padding: 0 50px;
    }
    @include medium-device {
      padding: 0 30px;
    }
    @include small-device {
      padding: 0 10px;
    }
    .header-logo {
      position: absolute;
      left: 50%;
      top: 10%;
      transform: translateX(-50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: white;
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
    .header-slogan {
      font-size: 12px;
      font-style: italic;
    }
  }
}
</style>
