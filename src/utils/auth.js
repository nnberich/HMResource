// 方便处理本地token
// import date from '@hapi/joi/lib/types/date'
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas'
const TokenTime = 'hrsaas-token-time'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function setTokenTime() {
  return Cookies.set(TokenTime, Date.now())
}

export function getTokenTime() {
  return Cookies.get(TokenTime)
}
