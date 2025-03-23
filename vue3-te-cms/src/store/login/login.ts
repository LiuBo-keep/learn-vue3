import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { accountLoginRequest } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN, LOGIN_TYPE } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: () => ({
    type: localCache.getCache(LOGIN_TOKEN) ?? '',
    token: localCache.getCache(LOGIN_TYPE) ?? ''
  }),

  actions: {
    // 登录操作
    async loginAccountAction(account: IAccount) {
      // const loginResult = await accountLoginRequest(account)
      // console.log('loginResult =' + loginResult)

      this.type = 'Brear'
      this.token = 'dadadadad'

      localCache.setCache(LOGIN_TOKEN, this.token)
      localCache.setCache(LOGIN_TYPE, this.type)

      // 跳转main页面
      router.push('/main')
    }
  }
})

export default useLoginStore
