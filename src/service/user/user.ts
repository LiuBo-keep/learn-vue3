import hyRequest from '..'
const USER_URL_PREFIX = '/vue3/user/'

export function findCurrentLoginUser() {
  return hyRequest.get({
    url: USER_URL_PREFIX + 'current-login-user'
  })
}
