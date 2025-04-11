<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="210px">
        <mainMenu />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <span>Header</span>
          <span><button @click="handleExitClick">登出</button></span>
        </el-header>
        <el-main> Main </el-main>
      </el-container>
    </el-container>
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
import mainMenu from '@/components/main-menu/main-menu.vue'

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
  height: 100%;
}
.main-content {
  height: 100%;
  .el-aside {
    background-color: palegoldenrod;
  }

  .el-header {
    background-color: skyblue;
  }

  .el-main {
    background-color: salmon;
  }
}
</style>
