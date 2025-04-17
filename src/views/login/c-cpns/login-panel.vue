<template>
  <div class="login-panel">
    <!-- 顶部区域 -->
    <h1 class="title">{{ systemTilie }}</h1>

    <!-- 中间的tabls切换 -->
    <div class="tabls">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 账号登录 -->
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <div class="text">帐号登录</div>
            </div>
          </template>
          <paneAccount ref="accountRef" />
        </el-tab-pane>

        <!-- 手机登录 -->
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <div class="text">手机登录</div>
            </div>
          </template>
          <panePhone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import paneAccount from './pane-account.vue'
import panePhone from './pane-phone.vue'
import type PaneAccount from './pane-account.vue'
import { localCache } from '@/utils/cache'

const systemTilie = import.meta.env.VITE_SYSTEM_TITLE

// 是否记住密码
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
watch(isRemPwd, (newValue) => {
  console.log(newValue)
  if (newValue) {
    localCache.setCache('isRemPwd', newValue)
  } else {
    localCache.removeCache('isRemPwd')
  }
})
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
  if (activeName.value == 'account') {
    // 获取子组件的实例
    const paneAccount = accountRef.value
    // 调用方法
    paneAccount?.loginAction(isRemPwd.value)
  } else {
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 380px;
  margin-bottom: 150px;
  background-color: white;
  padding: 25px;
  border-radius: 10px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    margin-left: 5px;
  }

  .controls {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
