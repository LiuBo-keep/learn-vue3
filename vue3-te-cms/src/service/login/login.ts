import type { IAccount } from '@/types'
import hyRequest from '..'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/user-auth/login',
    data: account
  })
}
