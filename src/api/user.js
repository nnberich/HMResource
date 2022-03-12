import request from '@/utils/request'
import { getToken } from '@/utils/auth'
/**
 * 用户登录
 * @param {*} data mobile password
 * @returns
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + getToken()
    }
  })
}

// 获取用户基本信息
// 获取用户id
export function getUserDetailApi(id) {
  return request({
    url: '/sys/user/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getToken()
    }
  })
}
