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
  .content {
    max-width: 750px;
    margin: 0 auto 110px;
    background-color: #f4f4f4;
  }
</style>
