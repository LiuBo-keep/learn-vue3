import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { accountLoginRequest } from '@/service/login/login'
import { localCache } from '@/utils/cache'

let LOGIN_TOKEN = 'token'
let LOGIN_TYPE = 'type'

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
    }
  }
})

export default useLoginStore
