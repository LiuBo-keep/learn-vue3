import { TIME_OUT } from './config'
import HYRequest from './request'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, LOGIN_TYPE } from '@/global/constants'

const hyRequest = new HYRequest({
  baseURL: '',
  timeout: TIME_OUT,
  withCredentials: true,
  interceptors: {
    requestSuccessFn: (config) => {
      // 设置请求header
      if (config.headers && localCache.getCache(LOGIN_TOKEN)) {
        const tokenType = localCache.getCache(LOGIN_TYPE)
        const token = localCache.getCache(LOGIN_TOKEN)
        config.headers.Authorization = tokenType + ' ' + token
      }
      return config
    }
  }
})

export default hyRequest
