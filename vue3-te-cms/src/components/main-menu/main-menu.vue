<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="../../assets/img/logo.svg" alt="" />
      <h2 v-show="!isCollapse" class="title">{{ systemTilie }}</h2>
    </div>
    <div class="menu">
      <el-menu
        default-active="1"
        :collapse="isCollapse"
        background-color="#001529"
        text-color="#b7bdc3"
        active-text-color="#fff"
      >
        <el-menu-item index="1">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2" v-if="showAdminMenu">
          <el-icon><User /></el-icon>
          <span>人员管理</span>
        </el-menu-item>

        <el-menu-item index="3" v-if="showAdminMenu">
          <el-icon><Tickets /></el-icon>
          <span>分类管理</span>
        </el-menu-item>

        <el-menu-item index="4" v-if="showAdminMenu">
          <el-icon><Goods /></el-icon>
          <span>产品管理</span>
        </el-menu-item>

        <el-menu-item index="5" v-if="showAdminMenu">
          <el-icon><Memo /></el-icon>
          <span>订单管理</span>
        </el-menu-item>

        <el-sub-menu index="6" v-if="showAdminMenu">
          <template #title>
            <el-icon><Tools /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="6-1">
            <el-icon><Folder /></el-icon>
            <span>文件存储设置</span>
          </el-menu-item>
          <el-menu-item index="6-2">
            <el-icon><ChatLineSquare /></el-icon>
            <span>短信设置</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useLoginStore from '@/store/login/login'
import { computed } from 'vue'

// 定义props
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

// 从环境变量中获取标题
const systemTilie = import.meta.env.VITE_SYSTEM_TITLE

// 获取当前登录用户信息
const loginStore = useLoginStore()
const userInfo = loginStore.userInfo

// 获取用户类型
const userType = userInfo?.userType

// 计算判断是否是管理员展示菜单
const showAdminMenu = computed(() => {
  return userType == 'administrator'
})
</script>

<style scoped lang="less">
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #304156;
  }
  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
