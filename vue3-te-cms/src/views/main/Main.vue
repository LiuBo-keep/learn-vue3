<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN, LOGIN_TYPE } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

// 退出登录
function handleExitClick() {
  // 1.删除token
  localCache.removeCache(LOGIN_TOKEN)
  localCache.removeCache(LOGIN_TYPE)

  // 2. 跳转到登录页
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
