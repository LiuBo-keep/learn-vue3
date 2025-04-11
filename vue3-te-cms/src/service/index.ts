import { TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: '',
  timeout: TIME_OUT,
  withCredentials: true
})

export default hyRequest
