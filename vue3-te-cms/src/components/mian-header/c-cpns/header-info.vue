<template>
  <div class="header-info">
    <!-- 操作小图标 -->
    <div class="operation">
      <span>
        <el-icon><Message /></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Search /></el-icon>
      </span>
    </div>
    <!-- 个人信息 -->
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" :src="avatarPath" />
          <span class="name">{{ username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><CircleClose /></el-icon>
              <span @click="logout">退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Lock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CURRENT_LOGIN_USER_INFO,
  LOGIN_TOKEN,
  LOGIN_TYPE
} from '@/global/constants'
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

const loginStore = useLoginStore()
const avatarPath = loginStore.userInfo?.avatarPath
const username = loginStore.userInfo?.name

function logout() {
  console.log('logout')
  localCache.removeCache(LOGIN_TOKEN)
  localCache.removeCache(LOGIN_TYPE)
  localCache.removeCache(CURRENT_LOGIN_USER_INFO)

  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
}
.operation {
  display: inline-flex;
  margin-right: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.info {
  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      margin-left: 5px;
    }
  }
}

.info {
  :global(.el-dropdown_item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
