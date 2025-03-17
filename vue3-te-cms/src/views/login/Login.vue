<template>
  <div class="login">
    <loginPanel />
  </div>
</template>

<script setup lang="ts">
import loginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(../../assets//img/login-bg.jpg);
  background-size: cover;
}
</style>
