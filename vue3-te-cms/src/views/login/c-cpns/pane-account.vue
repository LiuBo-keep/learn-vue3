<template>
  <div class="pane-account">
    <el-form
      :model="account"
      lable-with="60px"
      size="large"
      :rules="accountRules"
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
import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

// 定义account数据
const account = reactive({
  name: '',
  password: ''
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
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成',
      trigger: 'change'
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
      trigger: 'change'
    }
  ]
})
</script>

<style lang="less" scoped>
.pane-account {
  color: #000;
}
</style>
