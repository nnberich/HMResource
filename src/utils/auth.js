// 方便处理本地token
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
