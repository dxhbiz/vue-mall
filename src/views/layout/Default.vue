<template>
  <div>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer-ele></footer-ele>
  </div>
</template>

<script>
  import FooterEle from '../common/Footer.vue'

  export default {
    components: {
      FooterEle
    }
  }
</script>

<style scoped>

</style>
