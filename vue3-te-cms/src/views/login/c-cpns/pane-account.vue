<template>
  <div class="pane-account">
    <el-form
      :model="account"
      lable-with="60px"
      size="large"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { type FormRules, type FormInstance, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

// 定义account数据
const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? '',
  password: localCache.getCache(CACHE_PASSWORD) ?? ''
})

// 定义校验规则
const accountRules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '必须输入帐号信息~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,20}$/,
      message: '必须是6~20数字或字母组成',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入密码~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
})

const formRef = ref<FormInstance>()

// 执行帐号登录逻辑
function loginAction(isRemPwd: boolean) {
  const loginStore = useLoginStore()
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1. 获取用户输入的帐号和密码
      const name = account.name
      const password = account.password
      const grantType = 'password'

      // 2.发起网络请求进行登录
      loginStore
        .loginAccountAction({ grantType, name, password })
        .then((res) => {
          if (isRemPwd) {
            localCache.setCache(CACHE_NAME, name)
            localCache.setCache(CACHE_PASSWORD, password)
          } else {
            localCache.removeCache(CACHE_NAME)
            localCache.removeCache(CACHE_PASSWORD)
          }
        })
    } else {
      ElMessage({
        message: '请输入正确的帐号或密码格式~',
        type: 'warning'
      })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.pane-account {
  color: #000;
}
</style>
