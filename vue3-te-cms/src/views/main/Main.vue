<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import {
  CURRENT_LOGIN_USER_INFO,
  LOGIN_TOKEN,
  LOGIN_TYPE
} from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

// 退出登录
function handleExitClick() {
  // 1.删除token 和当前登录人信息
  localCache.removeCache(LOGIN_TOKEN)
  localCache.removeCache(LOGIN_TYPE)
  localCache.removeCache(CURRENT_LOGIN_USER_INFO)

  // 2. 跳转到登录页
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
