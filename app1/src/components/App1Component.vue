<template>
  <div>
    <h1>App1 Component</h1>
    <router-link to="/"></router-link>
    <router-link to="/crm">CRM</router-link>
    <router-link to="/app2">App2</router-link>
  </div>
</template>

<script>
export default {
  name: 'App1Component',
};
</script>
<style scoped>
body{
  background-color: aqua;
}
</style>