<template lang="pug">
  .content-wrapper
    Header
    router-view
    Footer
</template>

<script>
import Header from './src/components/Header'
import Footer from './src/components/Footer'

export default {
  components: {
    Header,
    Footer
  },

  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped></style>
