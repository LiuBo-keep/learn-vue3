import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { accountLoginRequest } from '@/service/login/login'
import { localCache } from '@/utils/cache'

const useLoginStore = defineStore('login', {
  state: () => ({
    type: '',
    token: ''
  }),

  actions: {
    // 登录操作
    async loginAccountAction(account: IAccount) {
      // const loginResult = await accountLoginRequest(account)
      // this.type = loginResult.data.type
      // this.token = loginResult.data.token
      console.log('aaaaaaaaaaaaaaaaaaaaa')
      this.type = 'Berar'
      this.token = 'dadadadada'

      localCache.setCache('token', this.token)
    }
  }
})

export default useLoginStore
