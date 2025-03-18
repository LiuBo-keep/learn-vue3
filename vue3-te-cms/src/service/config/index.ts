let BASE_URL = ''

if (import.meta.env.DEV) {
  // 开发
  BASE_URL = 'http://codercba.com:8000'
} else {
  // 生产
  BASE_URL = 'http://152.136.185.210:5000'
}

export { BASE_URL }
export const TIME_OUT = 1000
