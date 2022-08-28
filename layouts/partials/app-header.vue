<template>
  <header class="app-header flex--row row--middle--center">
    <div class="app-header__content flex--row row--middle--center">
      <div class="header-logo flex--row row--middle--center">
        <img src="@/static/logo.png" alt="" />
      </div>
      <div class="header-left-menus">
        <button class="btn" @click="searchModalOpen">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 487.95 487.95"
            style="enable-background: new 0 0 487.95 487.95"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="header-right-menus">
        <button class="btn" @click="whatIDrink">🍺</button>
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
  position: fixed;
  top: 0;
  border-bottom: 2px solid $dark-three;
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
      border: 2px solid $dark-three;
      box-shadow: rgba(0, 0, 0, 0.221) 0px 7px 8px;
      @include medium-device {
        width: 64px;
        height: 64px;
      }

      @include small-device {
        width: 60px;
        height: 60px;
        box-shadow: none;
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
    .header-app-version {
      font-size: 12px;
      font-style: italic;
    }
    .header-left-menus {
      button {
        svg {
          width: 13px;
        }
      }
    }
  }
}
</style>
