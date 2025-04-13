<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '50px' : '210px'">
        <MainMenu :is-collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <MainHeader @fold-change="handleFoldChange" />
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
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/mian-header/main-header.vue'
import { ref } from 'vue'

// 处理main-header折叠变化
const isCollapse = ref(false)
function handleFoldChange(flag: boolean) {
  isCollapse.value = flag
}

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
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: salmon;
  }
}
</style>
