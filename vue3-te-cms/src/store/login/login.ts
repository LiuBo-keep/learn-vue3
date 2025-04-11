import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { accountLoginRequest } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import router from '@/router'
import {
  CURRENT_LOGIN_USER_INFO,
  LOGIN_TOKEN,
  LOGIN_TYPE
} from '@/global/constants'
import ResponseCode from '@/global/response'
import { type FormInstance, ElMessage } from 'element-plus'
import { findCurrentLoginUser } from '@/service/user/user'
const useLoginStore = defineStore('login', {
  state: () => ({
    type: localCache.getCache(LOGIN_TOKEN) ?? '',
    token: localCache.getCache(LOGIN_TYPE) ?? ''
  }),

  actions: {
    // 登录操作
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)

      if (ResponseCode.SUCCESS != loginResult?.code) {
        ElMessage({
          message: loginResult?.msg,
          type: 'warning'
        })
      } else {
        localCache.setCache(LOGIN_TOKEN, loginResult?.data.token)
        localCache.setCache(LOGIN_TYPE, loginResult?.data.type)

        // 获取当前登录人信息
        const userInfo = await findCurrentLoginUser()
        localCache.setCache(CURRENT_LOGIN_USER_INFO, userInfo?.data)

        // 跳转main页面
        router.push('/main')
      }
    }
  }
})

export default useLoginStore
