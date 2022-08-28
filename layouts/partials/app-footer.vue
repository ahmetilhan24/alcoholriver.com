<template>
  <footer class="app-footer flex--column column--middle--center">
    <h5>
      Bu site <strong>Ahmet İlhan</strong> tarafından kodlanmış olup,
      <i>Tüm alkol severlere armağan edilmiştir.</i>
    </h5>
    <br />
    <p>
      <i>"Alman <strong>Saflık Yasasına</strong> Göre Kodlanmıştır"</i>
    </p>
    <a href="https://piizapp.com/"
      >Alcohol data from <strong>Piizapp</strong></a
    >
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
}
</script>
<style lang="scss" scoped>
.app-footer {
  width: 100%;
  padding: 20px;
  background-color: $gray-three;
  margin-top: 40px;
  text-align: center;
  h5 {
    @include golden-text(16);
    @include small-device {
      @include golden-text(14);
    }
  }
  p {
    @include golden-text(14);
    @include small-device {
      @include golden-text(13);
    }
    opacity: 0.7;
  }
  a {
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>
