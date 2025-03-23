let BASE_URL = ''

if (import.meta.env.DEV) {
  // 开发
  BASE_URL = 'http://localhost:8000/JavaProject'
} else {
  // 生产
  BASE_URL = 'http://152.136.185.210:5000'
}

export { BASE_URL }
export const TIME_OUT = 3000
