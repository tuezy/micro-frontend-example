<template>
  <h1>Shell Alway Here</h1>
  <App1Component></App1Component>
</template>
<script>
import {defineAsyncComponent, ref} from "vue";
export default {
  components: {
    App1Component: defineAsyncComponent(() => import('app1/App1Component')),
  }

}
</script>
<style scoped="scss">
  body{
    background-color: aqua;
  }
</style>