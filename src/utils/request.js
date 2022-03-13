import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
import { getToken, getTokenTime } from './auth'
import router from '@/router'
// import store from '@/store'
const timeOut = 7200 * 1000
// 执行npm run Dev ，webpack会给node添加一个环境变量
// process.env.NODE_ENV变成development
// 执行npm run build
// process.env.NODE_ENV变成production

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API

  // baseURL: 'http://localhost:8083/api'

})

// 添加请求拦截器
request.interceptors.request.use((config) => {
// 请求配置项
  if (getToken()) {
    const tokenTime = getTokenTime()
    const currentTime = Date.now()
    if (currentTime - tokenTime > timeOut) {
      store.dispatch('user/logout')

      router.push('/login')
      return Promise.reject(new Error('登录超时'))
    }
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

// 添加请求拦截器
request.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    // 响应成功拦截：只能代表请求成功，不代表业务逻辑成功

    const { data: { data, success, message }} = response
    if (success) {
      // Message.success('its ok!')
      return data
    }
    Message.error(message)
    return Promise.reject(new Error(message))
  }, function(error) {
    // 对响应错误做点什么
    if (error.respons && error.respons.status) {
      store.dispatch('user/logout')
      router.push('/login')
      Message.error('登录超时')
      return Promise.reject(error)
    } else {
      Message.error('系统异常')
    }
    if (error.message === '登录超时') {
      Message.error('登录超时')
    } else {
      Message.error('系统异常')
    }
    return Promise.reject(error)
  }
)

export default request

