<template>
  <!--footer start-->
  <section class="footer" id="footer">
    <vue-social />
  </section>
  <!--footer end-->
</template>

<script>
import Social from './social'

export default {
  components: {
    'vue-social': Social,
  }
}
</script>

<style lang="scss" scoped>
@import "./app/assets/stylesheets/components/footer";
</style>
