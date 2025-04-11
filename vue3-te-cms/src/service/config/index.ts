import { LOGIN_TOKEN, LOGIN_TYPE } from '@/global/constants'
import { localCache } from '@/utils/cache'

let BASE_URL = ''
let HEADERS = {}

if (import.meta.env.DEV) {
  // 开发
  BASE_URL = 'http://localhost:8000/JavaProject'
} else {
  // 生产
  BASE_URL = 'http://152.136.185.210:5000'
}

// 组装请求头
if (!localCache.getCache(LOGIN_TOKEN)) {
  const token =
    localCache.getCache(LOGIN_TYPE) + ' ' + localCache.getCache(LOGIN_TOKEN)
  HEADERS = {
    Authentication: token
  }
}

export { BASE_URL, HEADERS }
export const TIME_OUT = 3000
